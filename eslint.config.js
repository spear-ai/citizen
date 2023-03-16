/* eslint-disable import/no-default-export */

import { baseEslintConfig } from "@spear-ai/eslint-config";

/** @type {import("eslint").Linter.FlatConfig} */
const eslintConfig = [
  {
    ignores: ["packages/**"],
  },
  ...baseEslintConfig,
];

export default eslintConfig;
