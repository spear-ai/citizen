module.exports = {
  extends: ["@spear-ai/npm-package-json-lint-config/spear-library"],
  rules: {
    "prefer-absolute-version-devDependencies": [
      "error",
      {
        exceptions: ["@spear-ai/npm-package-json-lint-config"],
      },
    ],
  },
};
