# @spear-ai/npm-package-json-lint-config

A collection of [npm-package-json-lint](https://npmpackagejsonlint.org) config files.

## Installation

```shell
yarn add -D npm-package-json-lint @spear-ai/npm-package-json-lint-config
```

## Usage

Add the following to your `npmpackagejsonlint.config.cjs` file:

```js
const npmPackageJsonLintConfig = {
  extends: ["@spear-ai/npm-package-json-lint-config/spear-library"],
};

module.exports = npmPackageJsonLintConfig; // eslint-disable-line unicorn/prefer-module
```
