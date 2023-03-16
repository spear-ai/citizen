/* eslint-disable import/no-default-export */

import baseNpmPackageJsonLintConfig from "./base";

const npmPackageJsonLintConfig = {
  ...baseNpmPackageJsonLintConfig,
  rules: {
    "valid-values-author": ["error", ["Spear AI"]],
    "valid-values-name-scope": ["error", ["@spear-ai"]],
  },
};

export default npmPackageJsonLintConfig;
