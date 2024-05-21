import { baseEslintConfig, prettierConfig } from "@spear-ai/eslint-config";

/** @type {import("eslint").Linter.FlatConfig} */
const eslintConfig = [
  {
    ignores: ["dist", "node_modules", ".venv"],
  },
  ...baseEslintConfig,
  prettierConfig,
];

export default eslintConfig;
