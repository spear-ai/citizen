# @spear-ai/eslint-config

An [ESLint](https://eslint.org) config with all batteries included.

## Installation

```shell
yarn add -D eslint @spear-ai/eslint-config
```

This package supports ESLint 8.57, 9, and 10. ESLint 10 requires Node.js 20.19 or newer.

## Usage

Add the following to your `eslint.config.js` file:

```ts
import { baseEslintConfig } from "@spear-ai/eslint-config";

const eslintConfig = [...baseEslintConfig];

export default eslintConfig;
```
