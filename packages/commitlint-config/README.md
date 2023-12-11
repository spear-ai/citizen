# @spear-ai/commitlint-config

A [commitlint](https://commitlint.js.org) config.

## Installation

```shell
yarn add -D @spear-ai/commitlint-config commitlint
```

## Usage

Add the following to your `commitlint.config.ts` file:

```ts
import type { UserConfig } from "@commitlint/types";

const commitlintConfig: UserConfig = {
  extends: ["@spear-ai/commitlint-config"],
};

export default commitlintConfig;
```
