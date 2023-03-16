/* eslint-disable import/no-default-export */

import { eslintConfig as spearEslintConfig } from "@spear-ai/eslint-config";

/** @type {import("eslint").Linter.FlatConfig} */
const eslintConfig = [
  {
    ignores: ["packages/**"],
  },
  ...spearEslintConfig.map((config) => ({
    ...config,
  })),
];

export default eslintConfig;
