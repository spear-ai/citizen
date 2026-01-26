#!/bin/sh

set -eu

if ! command -v gpg >/dev/null 2>&1; then
    echo "Error: gpg is required but not installed." >&2
    exit 1
fi

# Default to global Git config.
GIT_USER_EMAIL="$(git config --global user.email 2>/dev/null || echo "")"
GIT_USER_NAME="$(git config --global user.name 2>/dev/null || echo "")"

# Parse named arguments.
while [ $# -gt 0 ]; do
    case "$1" in
        --email)
            if [ $# -lt 2 ] || [ "${2#--}" != "$2" ]; then
                echo "Error: --email requires a value" >&2
                exit 1
            fi
            GIT_USER_EMAIL="$2"
            shift 2
            ;;
        --name)
            if [ $# -lt 2 ] || [ "${2#--}" != "$2" ]; then
                echo "Error: --name requires a value" >&2
                exit 1
            fi
            GIT_USER_NAME="$2"
            shift 2
            ;;
        *)
            echo "Unknown option: $1" >&2
            echo "Usage: $0 [--email \"name@example.com\"] [--name \"Your Name\"]" >&2
            exit 1
            ;;
    esac
done

if [ -z "${GIT_USER_EMAIL}" ] || [ -z "${GIT_USER_NAME}" ]; then
    echo "Error: name and email are required." >&2
    echo "Usage: $0 [--name \"Your name\"] [--email \"name@spear.ai\"]" >&2
    echo "  Arguments default to git config --global user.name and user.email" >&2
    exit 1
fi

# Run in a temporary directory to avoid affecting the user's existing GPG keys.
GNUPGHOME=$(mktemp -d)
export GNUPGHOME
trap 'rm -rf "$GNUPGHOME"' EXIT

# Generate the GPG key.
gpg --batch --gen-key 2>/dev/null <<EOF
Key-Type: eddsa
Key-Curve: ed25519
Key-Usage: sign
Subkey-Type: ecdh
Subkey-Curve: cv25519
Subkey-Usage: encrypt
Name-Real: ${GIT_USER_NAME}
Name-Email: ${GIT_USER_EMAIL}
Expire-Date: 0
%no-protection
%commit
EOF

GPG_PRIVATE_KEY_BASE64=$(gpg --armor --export-secret-keys "${GIT_USER_EMAIL}" | base64 | tr -d '\n')
if [ -z "${GPG_PRIVATE_KEY_BASE64}" ]; then
    echo "Error: Failed to export GPG private key." >&2
    exit 1
fi

GPG_PUBLIC_KEY=$(gpg --armor --export "${GIT_USER_EMAIL}")
if [ -z "${GPG_PUBLIC_KEY}" ]; then
    echo "Error: Failed to export GPG public key." >&2
    exit 1
fi

echo "> GitHub: https://github.com/settings/keys"
echo ""
echo "${GPG_PUBLIC_KEY}"

echo ""
echo "> Cursor: https://cursor.com/dashboard?tab=cloud-agents"
echo ""
echo "GPG_PRIVATE_KEY_BASE64=${GPG_PRIVATE_KEY_BASE64}"
