# @spear-ai/oxlint-config

An [Oxlint](https://oxc.rs/docs/guide/usage/linter.html) configuration.

## Installation

```shell
pnpm add -D @spear-ai/oxlint-config oxlint oxlint-tsgolint
```

## Usage

Add the following to your `oxlint.config.ts` file:

```ts
import spearOxlintConfig from "@spear-ai/oxlint-config";
import { defineConfig } from "oxlint";

export default defineConfig({
  extends: [spearOxlintConfig],
});
```

Run it with type-aware rules enabled:

```shell
oxlint --type-aware --type-check --deny-warnings
```

The configuration loads its ESLint plugins from its own dependencies, so they do not need to be installed or hoisted in the consuming project.

## next-intl

Projects that write `next-intl` messages inline with `useExtracted` and `getExtracted` can enable the bundled `next-intl` plugin:

```ts
import spearOxlintConfig from "@spear-ai/oxlint-config";
import { defineConfig } from "oxlint";

export default defineConfig({
  extends: [spearOxlintConfig],
  overrides: [
    {
      files: ["src/**/*.ts", "src/**/*.tsx"],
      jsPlugins: ["@spear-ai/oxlint-config/plugins/next-intl"],
      rules: {
        "next-intl/binding-name": "error",
        "next-intl/translator-usage": "error",
      },
    },
  ],
});
```

- `next-intl/binding-name` requires the translator to be bound to `t`, the formatter to `format`, and the locale to `locale`.
- `next-intl/translator-usage` requires `t` to be called where it was created and with a string literal message, so the message extractor can find every message.
