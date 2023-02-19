# @spear-ai/eslint-config

An [ESLint](https://eslint.org) config with all batteries included.
Except ESLint itself, no peer dependencies are required.

## Installation

```shell
yarn add -D eslint @spear-ai/eslint-config
```

## Usage

Add the following to your `eslint.config.js` file:

```js
import spearConfig from '@spear-ai/eslint-config';

const eslintConfig = [
  ...spearConfig,
]

export default eslintConfig;
```
