#!/bin/bash

# Entry point for GPG signing configuration on Cursor Cloud Agents.
# Downloaded and sourced by each project's .cursor/environment.json install hook.
# After GPG setup, clears all sensitive environment variables before package installation.

set -euo pipefail

if [[ -z "${SCRIPT_DOWNLOAD_ROOT_URL:-}" ]]; then
    echo "[Setup] Error: SCRIPT_DOWNLOAD_ROOT_URL not set" >&2
    return 1
fi

CURL_AUTH_ARGS=()
if [[ -n "${GITHUB_SCRIPTS_TOKEN:-}" ]]; then
    CURL_AUTH_ARGS=(-H "Authorization: token $GITHUB_SCRIPTS_TOKEN")
fi

echo "[Setup] Configuring GPG signing..."

if ! curl -fsSL "${CURL_AUTH_ARGS[@]}" "$SCRIPT_DOWNLOAD_ROOT_URL/init-gpg.sh" | bash; then
    echo "[Setup] Error: GPG initialization failed" >&2
    return 1
fi

unset SCRIPT_DOWNLOAD_ROOT_URL GITHUB_SCRIPTS_TOKEN
unset GPG_PRIVATE_KEY_BASE64 GPG_PRIVATE_KEY_PASSPHRASE
unset MY_GIT_EMAIL MY_FULL_NAME

echo "[Setup] GPG configuration complete"
