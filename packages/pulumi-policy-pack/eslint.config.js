/* eslint-disable import/no-extraneous-dependencies */

import spearEslintConfig from "@spear-ai/eslint-config";

/** @type {import("eslint").Linter.FlatConfig} */
const eslintConfig = [
  {
    ignores: ["dist", "node_modules"],
  },
  ...spearEslintConfig,
  {
    files: ["src/**/*.ts"],
    rules: {
      "no-new": ["off"],
    },
  },
];

export default eslintConfig;
