/* eslint-disable import/no-default-export */

const baseNpmPackageJsonLintConfig = {
  extends: "npm-package-json-lint-config-default",
  rules: {
    "description-format": [
      "error",
      {
        forbidEndingPeriod: true,
      },
    ],
    "no-duplicate-properties": "error",
    "no-repeated-dependencies": "error",
    "prefer-absolute-version-devDependencies": ["error", {}],
    "prefer-alphabetical-bundledDependencies": "error",
    "prefer-alphabetical-dependencies": "error",
    "prefer-alphabetical-devDependencies": "error",
    "prefer-alphabetical-optionalDependencies": "error",
    "prefer-alphabetical-peerDependencies": "error",
    "prefer-alphabetical-scripts": "error",
    "prefer-property-order": ["error", []],
    "require-description": "error",
    "require-license": "error",
    "valid-values-license": ["error", ["MIT", "UNLICENSED"]],
    "version-format": "error",
  },
};

export default baseNpmPackageJsonLintConfig;
