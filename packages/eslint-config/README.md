# @spear-ai/eslint-config

An [ESLint](https://eslint.org) config with all batteries included.

## Installation

```shell
yarn add -D eslint @spear-ai/eslint-config
```

## Usage

Add the following to your `eslint.config.js` file:

```ts
import { eslintConfig as baseEslintConfig } from "@spear-ai/eslint-config";

const eslintConfig = [
  ...baseConfig,
];

export default eslintConfig;
```
