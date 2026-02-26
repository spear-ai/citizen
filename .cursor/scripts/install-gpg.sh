#!/bin/bash

# Downloads and runs GPG signing setup from the shared citizen package.
# Sourced by .cursor/environment.json before the project-specific install.
# Non-fatal: if GPG setup fails, the project install still runs.

CURSOR_SCRIPTS_URL="https://raw.githubusercontent.com/spear-ai/citizen/main/packages/cursor"

if [[ -z "${GPG_PRIVATE_KEY_BASE64:-}" ]]; then
    echo "[Setup] GPG_PRIVATE_KEY_BASE64 not set — skipping GPG signing setup"
    return 0
fi

echo "[Setup] Downloading GPG setup from citizen..."

if _setup_script=$(curl -fsSL "${CURSOR_SCRIPTS_URL}/setup.sh"); then
    if bash <<< "$_setup_script"; then
        echo "[Setup] GPG configuration complete"
    else
        echo "[Setup] Warning: GPG setup failed, continuing without commit signing"
    fi
else
    echo "[Setup] Warning: Failed to download setup.sh, continuing without commit signing"
fi

unset GPG_PRIVATE_KEY_BASE64 GPG_PRIVATE_KEY_PASSPHRASE CURSOR_SCRIPTS_URL _setup_script 2>/dev/null || true
