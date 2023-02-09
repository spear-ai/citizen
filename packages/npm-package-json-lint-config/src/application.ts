import baseNpmPackageJsonLintConfig from './base';

const npmPackageJsonLintConfig = {
  ...baseNpmPackageJsonLintConfig,
  rules: {
    ...baseNpmPackageJsonLintConfig.rules,
    'prefer-absolute-version-dependencies': 'error',
  },
}

export default npmPackageJsonLintConfig;
