module.exports = {
  extends: ["@spear-ai/npm-package-json-lint-config/spear-application"],
  rules: {
    "prefer-absolute-version-dependencies": [
      "error",
      {
        exceptions: ["@spear-ai/eslint-config", "@spear-ai/npm-package-json-lint-config"],
      },
    ],
    "prefer-alphabetical-scripts": "off",
  },
};
