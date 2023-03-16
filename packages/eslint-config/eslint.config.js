/* eslint-disable import/no-default-export */
/* eslint-disable import/no-extraneous-dependencies */

import { eslintConfig as spearEslintConfig } from "@spear-ai/eslint-config";

/** @type {import("eslint").Linter.FlatConfig} */
const eslintConfig = [
  {
    ignores: ["dist", "node_modules"],
  },
  ...spearEslintConfig,
];

export default eslintConfig;
