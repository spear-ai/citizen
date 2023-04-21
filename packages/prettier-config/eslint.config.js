/* eslint-disable import/no-default-export */
/* eslint-disable import/no-extraneous-dependencies */

import { baseEslintConfig, prettierConfig } from "@spear-ai/eslint-config";

/** @type {import("eslint").Linter.FlatConfig} */
const eslintConfig = [
  {
    ignores: ["dist", "node_modules"],
  },
  ...baseEslintConfig,
  prettierConfig,
];

export default eslintConfig;
