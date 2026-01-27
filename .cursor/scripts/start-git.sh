#!/bin/bash

# This script is designed to be sourced from `.bashrc`:
# Usage: `source .cursor/scripts/setup-git.sh`

set -euo pipefail

if [[ "${HOSTNAME:-}" != "cursor" ]]; then
    echo "ERROR: This script is designed for Cursor Cloud Agents only." >&2
    echo "Skipping setup to avoid breaking your local configuration." >&2
    return 1
fi

# Check if GPG signing is already configured for Git.
if git config --global user.signingkey &>/dev/null; then
    return 0
fi

# Check if Cursor Secrets are available.
if [[ -z "${GPG_PRIVATE_KEY_BASE64:-}" ]]; then
    echo "ERROR: GPG_PRIVATE_KEY_BASE64 not set in Cursor Cloud Agent Secrets." >&2
    echo "" >&2
    echo "Generate a GPG key:" >&2
    echo "curl -LsSf https://raw.githubusercontent.com/spear-ai/citizen/refs/heads/main/.cursor/scripts/configure-cursor-cloud-agent.sh | sh" >&2
    exit 1
fi

GPG_PRIVATE_KEY_PASSPHRASE="${GPG_PRIVATE_KEY_PASSPHRASE:-}"

echo "Setting up GPG signing…"

# Initialize GPG home with proper permissions.
export GNUPGHOME="${GNUPGHOME:-${HOME}/.gnupg}"
mkdir -p "${GNUPGHOME}"
chmod 700 "${GNUPGHOME}"

# Configure `gpg-agent` for non-interactive operation.
cat > "${GNUPGHOME}/gpg-agent.conf" <<GPGCONF
allow-preset-passphrase
default-cache-ttl 28800
max-cache-ttl 86400
GPGCONF

# Ensure the GPG agent configuration is applied by restarting the `gpg-agent`.
gpgconf --kill gpg-agent 2>/dev/null || true
gpgconf --launch gpg-agent

# Decode and import private key (base64 → ASCII-armored GPG key).
echo "${GPG_PRIVATE_KEY_BASE64}" | base64 -d | gpg --batch --import

# Extract email and name from GPG key UID (format: "Name <email>").
KEY_UID=$(gpg --with-colons --list-secret-keys | awk -F: '/^uid:/ {print $10; exit}')
if [[ -z "${KEY_UID}" ]]; then
    echo "Error: Could not extract UID from GPG key." >&2
    gpg --list-secret-keys >&2
    exit 1
fi

GIT_USER_NAME="${KEY_UID%% <*}"
GIT_USER_EMAIL="${KEY_UID##*<}"
GIT_USER_EMAIL="${GIT_USER_EMAIL%>*}"

echo "Configuring GPG signing for ${GIT_USER_NAME} <${GIT_USER_EMAIL}> …"

KEY_INFO=$(gpg --with-colons --with-keygrip --list-secret-keys "${GIT_USER_EMAIL}")
KEYGRIPS=$(echo "${KEY_INFO}" | awk -F: '/^grp:/ {print $10}')
FINGERPRINT=$(echo "${KEY_INFO}" | awk -F: '/^fpr:/ {print $10; exit}')

if [[ -z "${KEYGRIPS}" ]] || [[ -z "${FINGERPRINT}" ]]; then
    echo "Error: Failed to extract keygrip(s) or fingerprint for ${GIT_USER_EMAIL}." >&2
    echo "Available keys:" >&2
    gpg --list-secret-keys >&2
    exit 1
fi

# If a passphrase was provided, cache it in `gpg-agent` so signing doesn't require interaction.
if [[ -n "${GPG_PRIVATE_KEY_PASSPHRASE}" ]]; then
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
        sudo apt-get update && sudo apt-get install -y gnupg2
        GPG_PRESET="/usr/lib/gnupg/gpg-preset-passphrase"
    fi

    for KEYGRIP in ${KEYGRIPS}; do
        printf '%s' "${GPG_PRIVATE_KEY_PASSPHRASE}" | "${GPG_PRESET}" --preset "${KEYGRIP}"
    done
fi

git config --global commit.gpgsign true
git config --global gpg.program "gpg"
git config --global user.email "${GIT_USER_EMAIL}"
git config --global user.name "${GIT_USER_NAME}"
git config --global user.signingkey "${FINGERPRINT}"

# Verify that signing works without interaction.
if ! echo "test" | gpg --batch --yes --local-user "${FINGERPRINT}" --clearsign >/dev/null 2>&1; then
    echo "ERROR: GPG signing verification failed!" >&2
    gpg --list-secret-keys "${GIT_USER_EMAIL}" >&2
    echo "test" | gpg --batch --yes --local-user "${FINGERPRINT}" --clearsign 2>&1 || true
    exit 1
fi

echo "GPG signing configured."
echo "  Name: ${GIT_USER_NAME}"
echo "  Email: ${GIT_USER_EMAIL}"
echo "  Fingerprint: ${FINGERPRINT}"
