#!/bin/bash

# Imports a GPG key, presets the passphrase, and configures git commit signing.
# Supports both passphrase-protected and passwordless keys.
# Extracts git identity from the key UID if MY_GIT_EMAIL/MY_FULL_NAME are not set.

set -euo pipefail

# Skip if GPG signing is already fully configured.
if git config --global user.signingkey &>/dev/null \
   && [[ "$(git config --global --get commit.gpgsign 2>/dev/null)" == "true" ]]; then
    echo "[GPG] Signing already configured, skipping"
    exit 0
fi

: "${GPG_PRIVATE_KEY_BASE64:?GPG_PRIVATE_KEY_BASE64 not set in Cursor Secrets}"

echo "[GPG] Importing GPG key..."

export GNUPGHOME="${GNUPGHOME:-$HOME/.gnupg}"
mkdir -p "$GNUPGHOME"
chmod 700 "$GNUPGHOME"

cat > "$GNUPGHOME/gpg-agent.conf" <<EOF
allow-preset-passphrase
default-cache-ttl 28800
max-cache-ttl 86400
EOF

gpgconf --kill gpg-agent 2>/dev/null || true
gpgconf --launch gpg-agent

echo "$GPG_PRIVATE_KEY_BASE64" | base64 -d | gpg --batch --import

# Extract identity from secrets or from the key UID.
KEY_UID=$(gpg --with-colons --list-secret-keys 2>/dev/null | awk -F: '/^uid:/ {print $10; exit}')

if [[ -n "${MY_GIT_EMAIL:-}" ]]; then
    GIT_USER_EMAIL="$MY_GIT_EMAIL"
else
    GIT_USER_EMAIL="${KEY_UID##*<}"
    GIT_USER_EMAIL="${GIT_USER_EMAIL%>*}"
fi

if [[ -n "${MY_FULL_NAME:-}" ]]; then
    GIT_USER_NAME="$MY_FULL_NAME"
else
    GIT_USER_NAME="${KEY_UID%% <*}"
    GIT_USER_NAME="${GIT_USER_NAME%% (*}"
fi

if [[ -z "$GIT_USER_EMAIL" ]] || [[ -z "$GIT_USER_NAME" ]]; then
    echo "[GPG] Error: Could not determine git identity" >&2
    echo "[GPG] Set MY_GIT_EMAIL and MY_FULL_NAME in Cursor Secrets, or ensure the key has a UID" >&2
    exit 1
fi

FINGERPRINT=$(gpg --with-colons --list-secret-keys "$GIT_USER_EMAIL" 2>/dev/null | awk -F: '/^fpr:/ {print $10; exit}')

if [[ -z "$FINGERPRINT" ]]; then
    echo "[GPG] Error: No key found for $GIT_USER_EMAIL" >&2
    exit 1
fi

# Preset passphrase if provided (supports passphrase-protected keys).
if [[ -n "${GPG_PRIVATE_KEY_PASSPHRASE:-}" ]]; then
    KEYGRIPS=$(gpg --with-colons --with-keygrip --list-secret-keys "$GIT_USER_EMAIL" 2>/dev/null | awk -F: '/^grp:/ {print $10}')

    GPG_PRESET=""
    for preset_path in \
        "/usr/lib/gnupg/gpg-preset-passphrase" \
        "/usr/lib/gnupg2/gpg-preset-passphrase" \
        "/usr/libexec/gpg-preset-passphrase" \
        "$(command -v gpg-preset-passphrase 2>/dev/null || echo '')"; do
        if [[ -x "$preset_path" ]]; then
            GPG_PRESET="$preset_path"
            break
        fi
    done

    if [[ -z "$GPG_PRESET" ]]; then
        if command -v apt-get &>/dev/null; then
            echo "[GPG] gpg-preset-passphrase not found, installing gnupg2..." >&2
            sudo apt-get update -qq && sudo apt-get install -y -qq gnupg2 >/dev/null
            GPG_PRESET="/usr/lib/gnupg/gpg-preset-passphrase"
        else
            echo "[GPG] Error: gpg-preset-passphrase not found and apt-get unavailable" >&2
            exit 1
        fi
    fi

    for KEYGRIP in $KEYGRIPS; do
        printf '%s' "$GPG_PRIVATE_KEY_PASSPHRASE" | "$GPG_PRESET" --preset "$KEYGRIP"
    done
fi

git config --global user.name "$GIT_USER_NAME"
git config --global user.email "$GIT_USER_EMAIL"
git config --global user.signingkey "$FINGERPRINT"
git config --global commit.gpgsign true
git config --global gpg.program gpg

if echo "test" | gpg --batch --yes --local-user "$FINGERPRINT" --clearsign >/dev/null 2>&1; then
    echo "[GPG] Signing configured successfully"
    echo "[GPG]   Name: $GIT_USER_NAME"
    echo "[GPG]   Email: $GIT_USER_EMAIL"
    echo "[GPG]   Key: $FINGERPRINT"
else
    echo "[GPG] Error: Signing verification failed" >&2
    exit 1
fi
