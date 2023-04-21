/* eslint-disable import/no-default-export */
/* eslint-disable import/no-extraneous-dependencies */

import { baseEslintConfig, prettierConfig } from "@spear-ai/eslint-config";

/** @type {import("eslint").Linter.FlatConfig} */
const eslintConfig = [
  {
    ignores: ["dist", "node_modules"],
  },
  ...baseEslintConfig,
  {
    files: ["src/**/*.ts"],
    rules: {
      "no-new": ["off"],
    },
  },
  prettierConfig,
];

export default eslintConfig;
