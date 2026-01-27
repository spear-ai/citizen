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

# Add a hook to .bashrc that will run Git setup on first shell session.
BASHRC_MARKER="# Cursor Cloud Agent Git setup"
if ! grep -qF "${BASHRC_MARKER}" "${HOME}/.bashrc" 2>/dev/null; then
    echo "Installing Git setup hook in .bashrc…"
    cat >> "${HOME}/.bashrc" <<EOF

${BASHRC_MARKER}
if [[ -f "${CURSOR_DIRECTORY}/scripts/setup-git.sh" ]]; then
    source "${CURSOR_DIRECTORY}/scripts/setup-git.sh"
fi
EOF
    echo "Git setup will be configured on first shell session."
else
    echo "Git setup hook already installed in .bashrc."
fi
