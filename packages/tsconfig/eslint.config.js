// eslint-disable-next-line import-x/no-extraneous-dependencies
import { baseEslintConfig, prettierConfig } from "@spear-ai/eslint-config";

/** @type {import("eslint").Linter.Config[]} */
const eslintConfig = [
  {
    ignores: ["dist", "node_modules"],
  },
  ...baseEslintConfig,
  prettierConfig,
];

export default eslintConfig;
