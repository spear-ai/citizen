#!/bin/bash

# This script is designed to be sourced in Cursor Cloud Agents:
# Usage: `source .cursor/scripts/setup.sh`

set -euo pipefail

if [[ "${HOSTNAME:-}" != "cursor" ]]; then
    echo "ERROR: This script is designed for Cursor Cloud Agents only." >&2
    echo "Skipping setup to avoid breaking your local configuration." >&2
    return 1
fi

# Resolve the `.cursor` directory.
CURSOR_DIRECTORY="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

# Add a hook to .bash_profile that will run Git setup on first shell session.
BASH_PROFILE_MARKER="# Cursor Cloud Agent Git setup"
if ! grep -qF "${BASH_PROFILE_MARKER}" "${HOME}/.bash_profile" 2>/dev/null; then
    echo "Installing Git setup hook in .bash_profile…"
    cat >> "${HOME}/.bash_profile" <<EOF

${BASH_PROFILE_MARKER}
if [[ -f "${CURSOR_DIRECTORY}/scripts/setup-git.sh" ]]; then
    source "${CURSOR_DIRECTORY}/scripts/setup-git.sh"
fi
EOF
    echo "Git setup will be configured on first shell session."
else
    echo "Git setup hook already installed in .bash_profile."
fi
