#!/bin/bash

# Note: This script is designed to be sourced from setup.sh, not run directly.
# Using `return` instead of `exit` to avoid terminating the parent shell.

set -euo pipefail

# Ensure we only run in Cursor Cloud Agents.
if [[ "${IS_RUNNING_CURSOR_CLOUD_AGENT:-}" != "true" ]]; then
    echo "ERROR: This script is designed for Cursor Cloud Agents only." >&2
    echo "Skipping Git setup to avoid breaking your local configuration." >&2
    echo "If you are seeing this error message within a Cursor Cloud Agent environment, please set IS_RUNNING_CURSOR_CLOUD_AGENT=true in Cursor Cloud Agents Secrets." >&2
    return 1
fi

# Cursor Cloud Agents Secrets:
: "${GPG_PRIVATE_KEY_BASE64:?Error: GPG_PRIVATE_KEY_BASE64 not set in Cursor Cloud Agent Secrets.}"
GIT_USER_EMAIL="${GIT_USER_EMAIL:-}"
GIT_USER_NAME="${GIT_USER_NAME:-}"
GPG_PRIVATE_KEY_PASSPHRASE="${GPG_PRIVATE_KEY_PASSPHRASE:-}"

echo "Setting up GPG signing …"

# Initialize GPG home with proper permissions.
export GNUPGHOME="${GNUPGHOME:-${HOME}/.gnupg}"
mkdir -p "${GNUPGHOME}"
chmod 700 "${GNUPGHOME}"

# Configure `gpg-agent` for non-interactive operation.
# Allow a preset passphrase allows so it doesn't have to be entered after each commit.
cat > "${GNUPGHOME}/gpg-agent.conf" <<EOF
allow-preset-passphrase
default-cache-ttl 28800
max-cache-ttl 86400
EOF

# Ensure the GPG agent configuration is applied by restarting the `gpg-agent`.
gpgconf --kill gpg-agent 2>/dev/null || true
gpgconf --launch gpg-agent

# Decode and import private key (base64 → ASCII-armored GPG key).
echo "${GPG_PRIVATE_KEY_BASE64}" | base64 -d | gpg --batch --import 2>/dev/null

# Extract email address and full name from GPG key if not provided via secrets.
if [[ -z "${GIT_USER_EMAIL}" ]] || [[ -z "${GIT_USER_NAME}" ]]; then
    # Get the primary UID from the imported key (format: "Name <email>").
    KEY_UID=$(gpg --with-colons --list-secret-keys | awk -F: '/^uid:/ {print $10; exit}')

    if [[ -z "${KEY_UID}" ]]; then
        echo "Error: Could not extract UID from GPG key." >&2
        gpg --list-secret-keys >&2
        return 1
    fi

    if [[ -z "${GIT_USER_NAME}" ]]; then
        # Extract name (everything before " <")
        GIT_USER_NAME="${KEY_UID%% <*}"
    fi

    if [[ -z "${GIT_USER_EMAIL}" ]]; then
        # Extract email (everything between < and >)
        GIT_USER_EMAIL="${KEY_UID##*<}"
        GIT_USER_EMAIL="${GIT_USER_EMAIL%>*}"
    fi
fi

echo "Configuring GPG signing for ${GIT_USER_NAME} <${GIT_USER_EMAIL}> …"

KEY_INFO=$(gpg --with-colons --with-keygrip --list-secret-keys "${GIT_USER_EMAIL}" 2>/dev/null)
KEYGRIPS=$(echo "${KEY_INFO}" | awk -F: '/^grp:/ {print $10}')
FINGERPRINT=$(echo "${KEY_INFO}" | awk -F: '/^fpr:/ {print $10; exit}')

if [[ -z "${KEYGRIPS}" ]] || [[ -z "${FINGERPRINT}" ]]; then
    echo "Error: Failed to extract keygrip(s) or fingerprint for ${GIT_USER_EMAIL}." >&2
    echo "Available keys:" >&2
    gpg --list-secret-keys >&2
    return 1
fi

# If a passphrase was provided, cache it in `gpg-agent` so signing doesn't require interaction.
if [[ -n "${GPG_PRIVATE_KEY_PASSPHRASE}" ]]; then
    # Find `gpg-preset-passphrase` (Ubuntu typically has it in /usr/lib/gnupg).
    GPG_PRESET=""
    for preset_path in \
        "/usr/lib/gnupg/gpg-preset-passphrase" \
        "/usr/lib/gnupg2/gpg-preset-passphrase" \
        "/usr/libexec/gpg-preset-passphrase" \
        "$(command -v gpg-preset-passphrase 2>/dev/null || echo '')"; do
        if [[ -x "${preset_path}" ]]; then
            GPG_PRESET="${preset_path}"
            break
        fi
    done

    if [[ -z "${GPG_PRESET}" ]]; then
        echo "Error: gpg-preset-passphrase not found. Installing gnupg2 …" >&2
        # `gpg-preset-passphrase` is only supported in GPG 2.0 or later.
        # Ubuntu should have this by default, but if not, we'll install it.
        sudo apt-get update && sudo apt-get install -y gnupg2
        GPG_PRESET="/usr/lib/gnupg/gpg-preset-passphrase"
    fi

    # Load the passphrase into `gpg-agent` cache for all keygrips.
    for KEYGRIP in ${KEYGRIPS}; do
        printf '%s' "${GPG_PRIVATE_KEY_PASSPHRASE}" | "${GPG_PRESET}" --preset "${KEYGRIP}"
    done
fi

# Configure Git globally for automatic signing.
git config --global commit.gpgsign true
git config --global gpg.program "gpg"
git config --global user.email "${GIT_USER_EMAIL}"
git config --global user.name "${GIT_USER_NAME}"
git config --global user.signingkey "${FINGERPRINT}"

# Quick double check to make sure we can actually sign things without additional interaction.
if echo "test" | gpg --batch --yes \
    --local-user "${FINGERPRINT}" --clearsign >/dev/null 2>&1; then
    echo "GPG signing configured."
    echo "  Name: ${GIT_USER_NAME}"
    echo "  Email: ${GIT_USER_EMAIL}"
    echo "  Fingerprint: ${FINGERPRINT}"
else
    echo "ERROR: GPG signing verification failed!" >&2
    echo "Debugging information:" >&2
    gpg --list-secret-keys "${GIT_USER_EMAIL}" >&2
    echo "" >&2
    echo "Attempting test signature with verbose output:" >&2
    echo "test" | gpg --batch --yes \
        --local-user "${FINGERPRINT}" --clearsign 2>&1 || true
    return 1
fi
