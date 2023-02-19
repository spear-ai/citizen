import spearEslintConfig from "@spear-ai/eslint-config";

/** @type {import("eslint").Linter.FlatConfig} */
const eslintConfig = [
  {
    ignores: [
      "**/.yarn",
      "**/node_modules",
      ".git",
      "packages",
    ],
  },
  ...spearEslintConfig,
];

export default eslintConfig;
