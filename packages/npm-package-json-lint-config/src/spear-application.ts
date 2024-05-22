/* eslint-disable import-x/no-default-export */

import spearNpmPackageJsonLintConfig from "./spear";

const npmPackageJsonLintConfig = {
  ...spearNpmPackageJsonLintConfig,
  rules: {
    ...spearNpmPackageJsonLintConfig.rules,
    "prefer-absolute-version-dependencies": "error",
  },
};

export default npmPackageJsonLintConfig;
