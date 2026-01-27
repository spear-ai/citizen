#!/bin/bash

# This script is designed to be sourced in Cursor Cloud Agents:
# Usage: `source .cursor/scripts/setup.sh`

env

set -euo pipefail

# Resolve the `.cursor` directory.
CURSOR_DIRECTORY="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

# shellcheck disable=SC1091
if ! source "${CURSOR_DIRECTORY}/scripts/setup-git.sh"; then
    echo "ERROR: Git setup failed." >&2
    return 1
fi

# Protect against malicious dependencies.
# Clear secrets from subsequent commands in the Cloud Agent "install" step (e.g., `pnpm install`).
echo "Clearing sensitive environment variables…"
unset GIT_USER_EMAIL
unset GIT_USER_NAME
unset GPG_PRIVATE_KEY_BASE64
unset GPG_PRIVATE_KEY_PASSPHRASE

echo "Git setup completed."
