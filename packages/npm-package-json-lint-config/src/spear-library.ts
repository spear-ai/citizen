/* eslint-disable import/no-default-export */

import spearNpmPackageJsonLintConfig from "./spear";

const npmPackageJsonLintConfig = {
  ...spearNpmPackageJsonLintConfig,
  rules: {
    ...spearNpmPackageJsonLintConfig.rules,
    "prefer-caret-version-dependencies": "error",
  },
};

export default npmPackageJsonLintConfig;
