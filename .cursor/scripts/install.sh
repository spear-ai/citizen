#!/bin/bash

# This script is designed to be sourced in Cursor Cloud Agents:
# Usage: `source .cursor/scripts/install.sh`

set -euo pipefail

# Install `uv` if not already installed.
if ! command -v uv &>/dev/null; then
    echo "Installing uv…"
    curl -LsSf https://astral.sh/uv/install.sh | sh
    export PATH="${HOME}/.local/bin:${PATH}"
fi

yarn install
