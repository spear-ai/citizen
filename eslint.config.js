import { baseEslintConfig, prettierConfig } from "@spear-ai/eslint-config";

/** @type {import("eslint").Linter.Config[]} */
const eslintConfig = [
  {
    ignores: ["packages/**"],
  },
  ...baseEslintConfig,
  prettierConfig,
];

export default eslintConfig;
