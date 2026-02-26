#!/bin/bash

# Entry point for GPG signing configuration on Cursor Cloud Agents.
# Downloaded and sourced by each project's .cursor/environment.json install hook.
# After GPG setup, clears all sensitive environment variables before package installation.

set -euo pipefail

EXPECTED_INIT_GPG_SHA256="e206e99bc02a2c17f9d49a0f5b6fc1d852053b1bccbd059dd06cc2fb142f8af0"

cleanup_sensitive_env() {
    unset SCRIPT_DOWNLOAD_ROOT_URL GITHUB_SCRIPTS_TOKEN 2>/dev/null || true
    unset GPG_PRIVATE_KEY_BASE64 GPG_PRIVATE_KEY_PASSPHRASE 2>/dev/null || true
    unset MY_GIT_EMAIL MY_FULL_NAME 2>/dev/null || true
}

if [[ -z "${SCRIPT_DOWNLOAD_ROOT_URL:-}" ]]; then
    echo "[Setup] Error: SCRIPT_DOWNLOAD_ROOT_URL not set" >&2
    cleanup_sensitive_env
    return 1
fi

CURL_AUTH_ARGS=()
if [[ -n "${GITHUB_SCRIPTS_TOKEN:-}" ]]; then
    CURL_AUTH_ARGS=(-H "Authorization: token ${GITHUB_SCRIPTS_TOKEN}")
fi

echo "[Setup] Configuring GPG signing..."

_init_gpg_script=$(curl -fsSL ${CURL_AUTH_ARGS[@]+"${CURL_AUTH_ARGS[@]}"} "${SCRIPT_DOWNLOAD_ROOT_URL}/init-gpg.sh")
_actual_init_sha256=$(printf '%s\n' "$_init_gpg_script" | sha256sum | awk '{print $1}')

if [[ "$_actual_init_sha256" != "$EXPECTED_INIT_GPG_SHA256" ]]; then
    echo "[Setup] Error: init-gpg.sh checksum mismatch (expected: $EXPECTED_INIT_GPG_SHA256, got: $_actual_init_sha256)" >&2
    cleanup_sensitive_env
    return 1
fi

if ! bash <<< "$_init_gpg_script"; then
    echo "[Setup] Error: GPG initialization failed" >&2
    cleanup_sensitive_env
    return 1
fi

cleanup_sensitive_env

echo "[Setup] GPG configuration complete"
