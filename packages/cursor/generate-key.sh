#!/bin/bash

# Generates a GPG key for Cursor Cloud Agent commit signing.
# Outputs the public key (for GitHub) and base64 private key (for Cursor secrets).
#
# Usage: ./generate-key.sh --email "user@example.com" --name "Your Name"
#   Falls back to git config --global user.email and user.name if not provided.

set -euo pipefail

GIT_USER_EMAIL=""
GIT_USER_NAME=""

while [[ $# -gt 0 ]]; do
    case "$1" in
        --email) GIT_USER_EMAIL="$2"; shift 2 ;;
        --name) GIT_USER_NAME="$2"; shift 2 ;;
        *)
            echo "Usage: $0 --email <email> --name <name>" >&2
            exit 1
            ;;
    esac
done

: "${GIT_USER_EMAIL:=$(git config --global user.email 2>/dev/null || echo "")}"
: "${GIT_USER_NAME:=$(git config --global user.name 2>/dev/null || echo "")}"

if [[ -z "$GIT_USER_EMAIL" ]] || [[ -z "$GIT_USER_NAME" ]]; then
    echo "Error: --email and --name are required (or set git config --global user.email/name)" >&2
    exit 1
fi

GNUPGHOME=$(mktemp -d)
export GNUPGHOME
trap 'rm -rf "$GNUPGHOME"' EXIT

gpg --batch --quiet --gen-key <<EOF
Key-Type: eddsa
Key-Curve: ed25519
Key-Usage: sign
Subkey-Type: ecdh
Subkey-Curve: cv25519
Subkey-Usage: encrypt
Name-Real: $(printf '%s' "$GIT_USER_NAME" | sed 's/%/%%/g')
Name-Email: $(printf '%s' "$GIT_USER_EMAIL" | sed 's/%/%%/g')
Name-Comment: Cursor Cloud Agent
Expire-Date: 0
%no-protection
%commit
EOF

GPG_PUBLIC_KEY=$(gpg --armor --export "$GIT_USER_EMAIL")
GPG_PRIVATE_KEY_BASE64=$(gpg --armor --export-secret-keys "$GIT_USER_EMAIL" | base64 | tr -d '\n')

echo "=== Add this public key to GitHub ==="
echo "https://github.com/settings/keys"
echo ""
echo "$GPG_PUBLIC_KEY"
echo ""
echo "=== Add these to Cursor Cloud Agent Secrets ==="
echo "https://cursor.com/dashboard?tab=cloud-agents"
echo ""
echo "GPG_PRIVATE_KEY_BASE64=$GPG_PRIVATE_KEY_BASE64"
