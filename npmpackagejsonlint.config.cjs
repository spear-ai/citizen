module.exports = {
  extends: ["@spear-ai/npm-package-json-lint-config/spear-application"],
  rules: {
    "prefer-absolute-version-devDependencies": [
      "error",
      {
        exceptions: [
          "@spear-ai/eslint-config",
          "@spear-ai/npm-package-json-lint-config",
          "@spear-ai/oxlint-config",
          "@spear-ai/tsconfig",
        ],
      },
    ],
    "prefer-alphabetical-scripts": "off",
  },
};
