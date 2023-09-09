import { baseEslintConfig, prettierConfig } from "@spear-ai/eslint-config";

/** @type {import("eslint").Linter.FlatConfig} */
const eslintConfig = [
  {
    ignores: ["packages/**"],
  },
  ...baseEslintConfig,
  prettierConfig,
];

export default eslintConfig;
