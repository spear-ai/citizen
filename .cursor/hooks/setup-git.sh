#!/bin/bash

# Hook to set up Git and GPG signing before git commands. (Cursor Cloud Agents only)

set -uo pipefail

continue_allow() {
    echo '{"continue": true, "permission": "allow"}'
    exit 0
}

stop_deny() {
    local message="${1:-Hook execution denied}"
    echo "{\"continue\": false, \"permission\": \"deny\", \"user_message\": \"${message}\"}"
    exit 0
}

# Read JSON input from stdin (required by hook protocol).
cat > /dev/null

# Skip if not running on a Cursor Cloud Agent.
if [[ "${HOSTNAME:-}" != "cursor" ]]; then
    continue_allow
fi

# Skip if GPG signing already configured.
if git config --global user.signingkey &>/dev/null; then
    continue_allow
fi

# Error if `GPG_PRIVATE_KEY_BASE64` is not available.
if [[ -z "${GPG_PRIVATE_KEY_BASE64:-}" ]]; then
    stop_deny "GPG_PRIVATE_KEY_BASE64 not set in Cursor Cloud Agent Secrets."
fi

# Initialize GPG home.
export GNUPGHOME="${GNUPGHOME:-${HOME}/.gnupg}"
if ! mkdir -p "${GNUPGHOME}"; then
    stop_deny "Failed to create GPG home directory."
fi
chmod 700 "${GNUPGHOME}"

# Configure `gpg-agent` for non-interactive operation.
cat > "${GNUPGHOME}/gpg-agent.conf" <<EOF
allow-preset-passphrase
default-cache-ttl 28800
max-cache-ttl 86400
EOF

# Restart `gpg-agent` to apply the new configuration.
gpgconf --kill gpg-agent 2>/dev/null || true
gpgconf --launch gpg-agent 2>/dev/null || true

# Import the key.
if ! echo "${GPG_PRIVATE_KEY_BASE64}" | base64 -d | gpg --batch --import 2>/dev/null; then
    stop_deny "Failed to import GPG key."
fi

# Extract identity from the key.
KEY_UID=$(gpg --with-colons --list-secret-keys 2>/dev/null | awk -F: '/^uid:/ {print $10; exit}')
if [[ -z "${KEY_UID}" ]]; then
    stop_deny "Failed to extract identity from GPG key."
fi

GIT_USER_EMAIL="${KEY_UID##*<}"
GIT_USER_EMAIL="${GIT_USER_EMAIL%>*}"
GIT_USER_NAME="${KEY_UID%% <*}"

FINGERPRINT=$(gpg --with-colons --list-secret-keys "${GIT_USER_EMAIL}" 2>/dev/null | awk -F: '/^fpr:/ {print $10; exit}')
if [[ -z "${FINGERPRINT}" ]]; then
    stop_deny "Failed to get GPG key fingerprint."
fi

# Configure git.
git config --global commit.gpgsign true
git config --global gpg.program gpg
git config --global user.email "${GIT_USER_EMAIL}"
git config --global user.name "${GIT_USER_NAME}"
git config --global user.signingkey "${FINGERPRINT}"

continue_allow
