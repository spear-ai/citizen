/* eslint-disable import/no-default-export */

import baseNpmPackageJsonLintConfig from "./base";

const npmPackageJsonLintConfig = {
  ...baseNpmPackageJsonLintConfig,
  rules: {
    ...baseNpmPackageJsonLintConfig.rules,
    "prefer-caret-version-dependencies": "error",
  },
};

export default npmPackageJsonLintConfig;
