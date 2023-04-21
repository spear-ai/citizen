# @spear-ai/prettier-config

A [Prettier](https://prettier.io) config.

## Installation

```shell
yarn add -D @spear-ai/prettier-config @types/prettier prettier
```

## Usage

Add the following to your `prettier.config.cjs` file:

```cjs
const basePrettierConfig = require("@spear-ai/prettier-config");

/** @type {import("prettier").Config} */
const prettierConfig = {
  ...basePrettierConfig,
};

module.exports = prettierConfig;
```
