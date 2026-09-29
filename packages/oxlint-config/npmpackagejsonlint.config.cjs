module.exports = {
  extends: ["@spear-ai/npm-package-json-lint-config/spear-library"],
  rules: {
    "prefer-absolute-version-devDependencies": [
      "error",
      {
        exceptions: ["@spear-ai/npm-package-json-lint-config", "@spear-ai/tsconfig"],
      },
    ],
    // Plugin versions are pinned so a plugin release cannot change the rules consumers run.
    "prefer-caret-version-dependencies": "off",
  },
};
