import eslintCommentsPlugin from "@eslint-community/eslint-plugin-eslint-comments";
import graphqlEslint from "@graphql-eslint/eslint-plugin";
import nextPlugin from "@next/eslint-plugin-next";
import stylisticPlugin from "@stylistic/eslint-plugin";
import type { ESLint, Linter } from "eslint";
import airbnbConfigReact from "eslint-config-airbnb/rules/react";
import airbnbConfigReactA11y from "eslint-config-airbnb/rules/react-a11y";
import airbnbConfigReactHooks from "eslint-config-airbnb/rules/react-hooks";
import airbnbBaseConfigBestPractices from "eslint-config-airbnb-base/rules/best-practices";
import airbnbBaseConfigErrors from "eslint-config-airbnb-base/rules/errors";
import airbnbBaseConfigEs6 from "eslint-config-airbnb-base/rules/es6";
import airbnbBaseConfigImports from "eslint-config-airbnb-base/rules/imports";
import airbnbBaseConfigNode from "eslint-config-airbnb-base/rules/node";
import airbnbBaseConfigStrict from "eslint-config-airbnb-base/rules/strict";
import airbnbBaseConfigStyle from "eslint-config-airbnb-base/rules/style";
import airbnbBaseConfigVariables from "eslint-config-airbnb-base/rules/variables";
import airbnbTypescriptConfig from "eslint-config-airbnb-typescript";
import airbnbTypescriptConfigShared from "eslint-config-airbnb-typescript/lib/shared";
import canonicalPlugin from "eslint-plugin-canonical";
import formatJsPlugin from "eslint-plugin-formatjs";
import importPluginX from "eslint-plugin-import-x";
import jsonSchemaValidatorPlugin from "eslint-plugin-json-schema-validator";
import jsoncPlugin from "eslint-plugin-jsonc";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import markdownPlugin from "eslint-plugin-markdown";
import markdownProcessor from "eslint-plugin-markdown/lib/processor";
import promisePlugin from "eslint-plugin-promise";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import reactUsePropsPlugin from "eslint-plugin-react-use-props";
import regexpPlugin from "eslint-plugin-regexp";
import simpleImportSortPlugin from "eslint-plugin-simple-import-sort";
import sonarjsPlugin from "eslint-plugin-sonarjs";
import sortDestructureKeysPlugin from "eslint-plugin-sort-destructure-keys";
import storybookPlugin from "eslint-plugin-storybook";
import tomlPlugin from "eslint-plugin-toml";
import typescriptSortKeysPlugin from "eslint-plugin-typescript-sort-keys";
import unicornPlugin from "eslint-plugin-unicorn";
import yamlPlugin from "eslint-plugin-yml";
import globals from "globals";
import jsoncParser from "jsonc-eslint-parser";
import tomlParser from "toml-eslint-parser";
import {
  configs as typescriptEslintConfigs,
  parser as typescriptEslintParser,
  plugin as typescriptEslintPlugin,
} from "typescript-eslint";
import yamlParser from "yaml-eslint-parser";

export { default as prettierConfig } from "eslint-config-prettier";

export const baseKeyOrder = [
  "$schema",
  "$id",
  "id",
  "title",
  "name",
  "version",
  "description",
  "author",
  "type",
];

export const defaultKeyOrder = [
  ...baseKeyOrder,
  {
    order: {
      natural: true,
      type: "asc",
    },
  },
];

export const defaultIgnoreFileList = [
  "**/.coverage_reports",
  "**/.mypy_cache",
  "**/.next",
  "**/.pytest_cache",
  "**/.ruff_cache",
  "**/.turbo/**",
  "**/.venv",
  "**/.yarn/**",
  "**/build",
  "**/dist",
  "**/node_modules",
  ".turbo",
  ".turbo/**",
  "package-lock.json",
];

export const githubWorkflowKeyOrder = [
  "if",
  ...baseKeyOrder,
  "key",
  "on",
  "uses",
  "runs-on",
  "timeout-minutes",
  {
    order: {
      natural: true,
      type: "asc",
    },
  },
];

export const jsonFileList = ["**/*.json"];

export const json5FileList = ["**/*.json5"];

export const jsoncFileList = [
  "**/*.code-workspace",
  "**/*.jsonc",
  "**/*rc.json",
  "**/.vscode/settings.json",
  "**/devcontainer.json",
  "**/tsconfig.json",
  "**/turbo.json",
];

export const jsonFamilyFileList = [...jsonFileList, ...json5FileList, ...jsoncFileList];

export const jsonFamilyRules: Linter.RulesRecord = {
  "jsonc/array-bracket-newline": ["error", "consistent"],
  "jsonc/array-bracket-spacing": ["error"],
  "jsonc/comma-dangle": ["off"],
  "jsonc/comma-style": ["error"],
  "jsonc/indent": ["error", 2],
  "jsonc/key-spacing": ["error"],
  "jsonc/object-curly-newline": ["error"],
  "jsonc/object-curly-spacing": ["error", "always"],
  "jsonc/object-property-newline": ["error"],
  "jsonc/sort-keys": [
    "error",
    {
      order: defaultKeyOrder,
      pathPattern: "^.*$",
    },
  ],
  "no-multiple-empty-lines": ["error", { max: 0 }],
  "no-trailing-spaces": ["error"],
};

export const tomlFileList = ["**/*.toml"];

export const yamlFileList = ["**/*.yaml", "**/*.yml"];

export const allowedAbbreviations = {
  "eslint-plugin-array-func.d": true,
  "eslint-plugin-react-use-props.d": true,
  "next-env.d": true,
  "next-env.override.d": true,
};

export const javascriptFileExtensionList = [".cjs", ".js", ".jsx", ".mjs"];
export const javascriptFileList = javascriptFileExtensionList.map((fileExtension) => `**/*${fileExtension}`);
export const typescriptFileExtensionList = [".d.ts", ".cts", ".mts", ".ts", ".tsx"];
export const typescriptFileList = typescriptFileExtensionList.map((fileExtension) => `**/*${fileExtension}`);
export const javascriptFamilyFileExtensionList = [
  ...javascriptFileExtensionList,
  ...typescriptFileExtensionList,
];
export const javascriptFamilyFileList = [...javascriptFileList, ...typescriptFileList];
export const javascriptFamilyInMarkdownFileList = javascriptFamilyFileList.map((file) => `**/*.md/${file}`);

export const storybookFileList = javascriptFamilyFileList.map(
  (fileExtension) => `.stories.${fileExtension}`,
);

export const baseEslintConfig: Linter.FlatConfig[] = [
  {
    ignores: defaultIgnoreFileList,
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
  },
  {
    files: jsonFileList,
    ignores: defaultIgnoreFileList,
    languageOptions: {
      parser: jsoncParser,
    },
    plugins: {
      jsonc: jsoncPlugin as unknown as ESLint.Plugin,
    },
    rules: {
      ...(jsoncPlugin.configs.base.overrides[0]?.rules as Linter.RulesRecord),
      ...(jsoncPlugin.configs["recommended-with-json"].rules as Linter.RulesRecord),
      ...jsonFamilyRules,
    },
  },
  {
    files: json5FileList,
    ignores: defaultIgnoreFileList,
    languageOptions: {
      parser: jsoncParser,
    },
    plugins: {
      jsonc: jsoncPlugin as unknown as ESLint.Plugin,
    },
    rules: {
      ...(jsoncPlugin.configs.base.overrides[0]?.rules as Linter.RulesRecord),
      ...(jsoncPlugin.configs["recommended-with-json5"].rules as Linter.RulesRecord),
      ...jsonFamilyRules,
    },
  },
  {
    files: jsoncFileList,
    ignores: defaultIgnoreFileList,
    languageOptions: {
      parser: jsoncParser,
    },
    plugins: {
      jsonc: jsoncPlugin as unknown as ESLint.Plugin,
    },
    rules: {
      ...(jsoncPlugin.configs.base.overrides[0]?.rules as Linter.RulesRecord),
      ...(jsoncPlugin.configs["recommended-with-jsonc"].rules as Linter.RulesRecord),
      ...jsonFamilyRules,
    },
  },
  {
    files: tomlFileList,
    ignores: defaultIgnoreFileList,
    languageOptions: {
      parser: tomlParser,
    },
    plugins: {
      toml: tomlPlugin as ESLint.Plugin,
    },
    rules: {
      ...(tomlPlugin.configs.base.overrides[0]?.rules as Linter.RulesRecord),
      ...(tomlPlugin.configs.standard.rules as Linter.RulesRecord),
      "no-multiple-empty-lines": ["error", { max: 1 }],
      "no-trailing-spaces": ["error"],
      "toml/array-bracket-spacing": ["error", "never"],
    },
  },
  {
    files: yamlFileList,
    ignores: defaultIgnoreFileList,
    languageOptions: {
      parser: yamlParser,
    },
    plugins: {
      yml: yamlPlugin as ESLint.Plugin,
    },
    rules: {
      ...(yamlPlugin.configs.base.overrides[0]?.rules as Linter.RulesRecord),
      ...(yamlPlugin.configs.standard.rules as Linter.RulesRecord),
      "no-multiple-empty-lines": ["error", { max: 0 }],
      "no-trailing-spaces": ["error"],
      "yml/block-sequence": ["error", "always"],
      "yml/no-multiple-empty-lines": ["error"],
      "yml/sort-keys": [
        "error",
        {
          order: defaultKeyOrder,
          pathPattern: "^.*$",
        },
      ],
    },
  },
  {
    files: ["**/.github/workflows/*.yaml", "**/.github/workflows/*.yml"],
    ignores: [...defaultIgnoreFileList, "**/*.yarnrc.yml"],
    rules: {
      "yml/sort-keys": [
        "error",
        {
          order: githubWorkflowKeyOrder,
          pathPattern: ".*",
        },
      ],
    },
  },
  {
    files: yamlFileList,
    ignores: [...defaultIgnoreFileList, "**/*.yarnrc.yml"],
    rules: {
      "yml/file-extension": ["error"],
    },
  },
  {
    files: ["**/*.md"],
    processor: markdownProcessor,
  },
  {
    files: javascriptFamilyFileList,
    ignores: defaultIgnoreFileList,
    languageOptions: {
      // @ts-expect-error The Typescript ESLint parser doesn’t strictly match
      parser: typescriptEslintParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        project: true,
        sourceType: "module",
      },
    },
    plugins: {
      "@eslint-community/eslint-comments": eslintCommentsPlugin,
      // @ts-expect-error The Stylistic ESLint plugins don’t strictly match
      "@stylistic": stylisticPlugin,
      // @ts-expect-error The Typescript ESLint plugins don’t strictly match
      "@typescript-eslint": typescriptEslintPlugin,
      canonical: canonicalPlugin,
      formatjs: formatJsPlugin,
      "import-x": importPluginX as unknown as ESLint.Plugin,
      "jsx-a11y": jsxA11yPlugin,
      markdown: markdownPlugin,
      promise: promisePlugin,
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      "react-use-props": reactUsePropsPlugin,
      regexp: regexpPlugin,
      "simple-import-sort": simpleImportSortPlugin,
      sonarjs: sonarjsPlugin,
      "sort-destructure-keys": sortDestructureKeysPlugin,
      storybook: storybookPlugin,
      "typescript-sort-keys": typescriptSortKeysPlugin,
      unicorn: unicornPlugin,
    },
    rules: {
      ...(Object.fromEntries(
        Object.entries({
          ...airbnbBaseConfigBestPractices.rules,
          ...airbnbBaseConfigErrors.rules,
          ...airbnbBaseConfigNode.rules,
          ...airbnbBaseConfigStyle.rules,
          ...airbnbBaseConfigVariables.rules,
          ...airbnbBaseConfigEs6.rules,
          ...airbnbBaseConfigImports.rules,
          ...airbnbBaseConfigStrict.rules,
          ...airbnbConfigReact.rules,
          ...airbnbConfigReactA11y.rules,
          ...airbnbConfigReactHooks.rules,
          ...airbnbTypescriptConfigShared.rules,
          ...airbnbTypescriptConfig.rules,
        }).filter(([name]) => !name.startsWith("import/") && !name.startsWith("@typescript-eslint/")),
      ) as Linter.RulesRecord),
      ...typescriptEslintConfigs.base.rules,
      ...typescriptEslintConfigs.eslintRecommended.rules,
      ...typescriptEslintConfigs.stylisticTypeChecked[2]!.rules, // eslint-disable-line @typescript-eslint/no-non-null-assertion
      ...typescriptEslintConfigs.strictTypeChecked[2]!.rules, // eslint-disable-line @typescript-eslint/no-non-null-assertion
      ...(eslintCommentsPlugin.configs?.recommended as ESLint.ConfigData).rules,
      ...importPluginX.configs.recommended.rules,
      ...importPluginX.configs["stage-0"].rules,
      ...importPluginX.configs.typescript.rules,
      ...(regexpPlugin.configs?.all as ESLint.ConfigData).rules,
      ...(promisePlugin.configs?.recommended as ESLint.ConfigData).rules,
      ...(sonarjsPlugin.configs?.recommended as ESLint.ConfigData).rules,
      // ...stylisticPlugin.configs["recommended-flat"].rules,
      ...(typescriptSortKeysPlugin.configs?.recommended as ESLint.ConfigData).rules,
      ...(unicornPlugin.configs?.recommended as ESLint.ConfigData).rules,
      "@eslint-community/eslint-comments/disable-enable-pair": [
        "error",
        {
          allowWholeFile: true,
        },
      ],
      "@next/next/google-font-display": ["off"],
      "@stylistic/jsx-newline": ["error", { prevent: true }],
      "@stylistic/lines-between-class-members": ["error", "always", { exceptAfterSingleLine: false }],
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
      "@typescript-eslint/naming-convention": [
        "error",
        {
          format: ["camelCase", "PascalCase", "UPPER_CASE"],
          selector: "variable",
          trailingUnderscore: "allow",
        },
        {
          format: ["camelCase", "PascalCase"],
          selector: "function",
        },
        {
          format: ["PascalCase"],
          selector: "typeLike",
        },
      ],
      "@typescript-eslint/no-empty-function": ["error", { allow: ["arrowFunctions"] }],
      "@typescript-eslint/quotes": ["error", "double", { avoidEscape: true }],
      "@typescript-eslint/restrict-template-expressions": [
        "error",
        {
          allowBoolean: true,
          allowNumber: true,
        },
      ],
      "@typescript-eslint/sort-type-constituents": ["error"],
      "@typescript-eslint/strict-boolean-expressions": [
        "error",
        {
          allowNumber: false,
          allowString: false,
        },
      ],
      "array-func/prefer-array-from": ["off"],
      "canonical/sort-keys": [
        "error",
        "asc",
        {
          caseSensitive: false,
          natural: true,
        },
      ],
      "capitalized-comments": ["warn", "always", { ignoreConsecutiveComments: true }],
      "dot-notation": ["off"],
      "formatjs/enforce-default-message": ["error"],
      "formatjs/enforce-id": [
        "error",
        {
          idInterpolationPattern: "[sha512:contenthash:base64:6]",
        },
      ],
      "formatjs/enforce-placeholders": ["error"],
      "formatjs/no-literal-string-in-jsx": ["error"],
      "formatjs/no-multiple-whitespaces": ["error"],
      "func-style": ["error", "expression"],
      "function-paren-newline": ["off", "consistent"],
      "import-x/consistent-type-specifier-style": ["error", "prefer-top-level"],
      "import-x/extensions": [
        "error",
        "always",
        {
          cjs: "never",
          cts: "never",
          js: "never",
          jsx: "never",
          mjs: "never",
          mts: "never",
          ts: "never",
          tsx: "never",
        },
      ],
      "import-x/first": ["error"],
      "import-x/newline-after-import": ["error"],
      "import-x/no-absolute-path": ["error"],
      "import-x/no-amd": ["error"],
      "import-x/no-anonymous-default-export": ["error"],
      "import-x/no-cycle": ["error"],
      "import-x/no-default-export": ["error"],
      "import-x/no-deprecated": ["error"],
      "import-x/no-dynamic-require": ["error"],
      "import-x/no-empty-named-blocks": ["error"],
      "import-x/no-extraneous-dependencies": [
        "error",
        {
          devDependencies: [
            ...javascriptFamilyFileExtensionList.map((fileExtension) => `**/*.benchmark${fileExtension}`),
            ...javascriptFamilyFileExtensionList.map((fileExtension) => `**/*.config${fileExtension}`),
            ...javascriptFamilyFileExtensionList.map((fileExtension) => `**/*.stories${fileExtension}`),
            ...javascriptFamilyFileExtensionList.map((fileExtension) => `**/*.test${fileExtension}`),
            ...javascriptFamilyFileExtensionList.map((fileExtension) => `**/.storybook/*${fileExtension}`),
            ...javascriptFamilyFileExtensionList.map((fileExtension) => `**/__test__/**/*${fileExtension}`),
          ],
        },
      ],
      "import-x/no-import-module-exports": ["error"],
      "import-x/no-mutable-exports": ["error"],
      "import-x/no-self-import": ["error"],
      "import-x/no-unused-modules": ["error"],
      "import-x/no-useless-path-segments": ["error"],
      "import-x/prefer-default-export": ["off"],
      "jsx-a11y/anchor-is-valid": [
        "error",
        {
          aspects: ["invalidHref", "preferButton"],
          components: ["Link"],
          specialLink: ["hrefLeft", "hrefRight"],
        },
      ],
      "jsx-a11y/label-has-associated-control": [
        "error",
        {
          assert: "either",
        },
      ],
      "jsx-a11y/no-autofocus": ["off"],
      "max-len": [
        "error",
        {
          code: 120,
          ignoreComments: false,
          ignorePattern: "^(ex|im)port (.*)",
          ignoreRegExpLiterals: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreUrls: true,
          tabWidth: 2,
        },
      ],
      "no-continue": ["off"],
      "no-multiple-empty-lines": [
        "error",
        {
          max: 1,
        },
      ],
      "no-restricted-exports": [
        "error",
        {
          restrictedNamedExports: ["then"],
        },
      ],
      "no-restricted-syntax": ["error", "LabeledStatement", "WithStatement"],
      "no-underscore-dangle": ["off"],
      "object-curly-newline": [
        "error",
        {
          ExportDeclaration: {
            consistent: true,
            minProperties: 6,
            multiline: true,
          },
          ImportDeclaration: {
            consistent: true,
            minProperties: 6,
            multiline: true,
          },
          ObjectExpression: {
            consistent: true,
            minProperties: 6,
            multiline: true,
          },
          ObjectPattern: {
            consistent: true,
            minProperties: 6,
            multiline: true,
          },
        },
      ],
      "promise/no-multiple-resolved": ["error"],
      "promise/prefer-await-to-callbacks": ["error"],
      "promise/prefer-await-to-then": ["error"],
      "quote-props": ["error", "consistent-as-needed"],
      quotes: ["error", "double", { avoidEscape: true }],
      "react/forbid-component-props": [
        "error",
        {
          forbid: [
            {
              allowedFor: ["FormattedList", "FormattedNumber"],
              message: "Use the `className` property instead",
              propName: "style",
            },
          ],
        },
      ],
      "react/forbid-dom-props": [
        "error",
        {
          forbid: [
            {
              message: "Use the `className` property instead",
              propName: "style",
            },
          ],
        },
      ],
      "react/function-component-definition": [
        "error",
        {
          namedComponents: "arrow-function",
          unnamedComponents: "arrow-function",
        },
      ],
      "react/jsx-sort-props": ["error"],
      "react/require-default-props": ["off"],
      "react/style-prop-object": ["off"],
      "simple-import-sort/exports": ["error"],
      "simple-import-sort/imports": [
        "error",
        {
          groups: [[String.raw`^\u0000`, "^node:", String.raw`^@?\w`, "^", String.raw`^\.`]],
        },
      ],
      "sonarjs/cognitive-complexity": ["off"],
      "sonarjs/no-duplicate-string": ["off"],
      "sort-destructure-keys/sort-destructure-keys": ["error"],
      "sort-vars": ["error"],
      "unicorn/custom-error-definition": ["error"],
      "unicorn/filename-case": [
        "error",
        {
          case: "kebabCase",
          ignore: ["CHANGELOG.md", "README.md"],
        },
      ],
      "unicorn/no-null": ["off"],
      "unicorn/prefer-at": ["error"],
      "unicorn/prefer-event-target": ["error"],
      "unicorn/prefer-string-replace-all": ["error"],
      "unicorn/prevent-abbreviations": [
        "error",
        {
          allowList: allowedAbbreviations,
        },
      ],
      "unicorn/template-indent": [
        "error",
        {
          comments: ["HTML"],
          selectors: ["TemplateLiteral"],
        },
      ],
    },
    settings: {
      ...airbnbBaseConfigImports.settings,
      ...airbnbTypescriptConfigShared.settings,
      ...airbnbTypescriptConfig.settings,
      ...airbnbConfigReact.settings,
      "import-x/extensions": [...javascriptFamilyFileExtensionList, ".json"],
      "import-x/external-module-folders": ["node_modules", "node_modules/@types"],
      "import-x/parsers": {
        "@typescript-eslint/parser": [...javascriptFamilyFileExtensionList, ".json"],
      },
      "import-x/resolver": {
        node: {
          extensions: [...javascriptFamilyFileExtensionList, ".json"],
        },
        typescript: true,
      },
    },
  },
  {
    files: ["**/*.cjs"],
    ignores: defaultIgnoreFileList,
    rules: {
      "@typescript-eslint/no-var-requires": ["off"],
    },
  },
  {
    files: javascriptFamilyInMarkdownFileList,
    ignores: defaultIgnoreFileList,
    languageOptions: {
      // @ts-expect-error The Typescript ESLint parser doesn’t strictly match
      parser: typescriptEslintParser,
      parserOptions: {
        project: false,
        sourceType: "module",
      },
    },
    rules: {
      "@typescript-eslint/await-thenable": ["off"],
      "@typescript-eslint/dot-notation": ["off"],
      "@typescript-eslint/no-array-delete": ["off"],
      "@typescript-eslint/no-base-to-string": ["off"],
      "@typescript-eslint/no-confusing-void-expression": ["off"],
      "@typescript-eslint/no-duplicate-type-constituents": ["off"],
      "@typescript-eslint/no-floating-promises": ["off"],
      "@typescript-eslint/no-implied-eval": ["off"],
      "@typescript-eslint/no-meaningless-void-operator": ["off"],
      "@typescript-eslint/no-misused-promises": ["off"],
      "@typescript-eslint/no-mixed-enums": ["off"],
      "@typescript-eslint/no-redundant-type-constituents": ["off"],
      "@typescript-eslint/no-throw-literal": ["off"],
      "@typescript-eslint/no-unnecessary-boolean-literal-compare": ["off"],
      "@typescript-eslint/no-unnecessary-condition": ["off"],
      "@typescript-eslint/no-unnecessary-template-expression": ["off"],
      "@typescript-eslint/no-unnecessary-type-arguments": ["off"],
      "@typescript-eslint/no-unnecessary-type-assertion": ["off"],
      "@typescript-eslint/no-unsafe-argument": ["off"],
      "@typescript-eslint/no-unsafe-assignment": ["off"],
      "@typescript-eslint/no-unsafe-call": ["off"],
      "@typescript-eslint/no-unsafe-enum-comparison": ["off"],
      "@typescript-eslint/no-unsafe-member-access": ["off"],
      "@typescript-eslint/no-unsafe-return": ["off"],
      "@typescript-eslint/no-useless-template-literals": ["off"],
      "@typescript-eslint/non-nullable-type-assertion-style": ["off"],
      "@typescript-eslint/only-throw-error": ["off"],
      "@typescript-eslint/prefer-find": ["off"],
      "@typescript-eslint/prefer-includes": ["off"],
      "@typescript-eslint/prefer-nullish-coalescing": ["off"],
      "@typescript-eslint/prefer-optional-chain": ["off"],
      "@typescript-eslint/prefer-promise-reject-errors": ["off"],
      "@typescript-eslint/prefer-reduce-type-parameter": ["off"],
      "@typescript-eslint/prefer-regexp-exec": ["off"],
      "@typescript-eslint/prefer-return-this-type": ["off"],
      "@typescript-eslint/prefer-string-starts-ends-with": ["off"],
      "@typescript-eslint/require-await": ["off"],
      "@typescript-eslint/restrict-plus-operands": ["off"],
      "@typescript-eslint/restrict-template-expressions": ["off"],
      "@typescript-eslint/return-await": ["off"],
      "@typescript-eslint/strict-boolean-expressions": ["off"],
      "@typescript-eslint/unbound-method": ["off"],
      "@typescript-eslint/use-unknown-in-catch-callback-variable": ["off"],
      "import-x/no-unresolved": ["off"],
    },
  },
  {
    files: storybookFileList,
    ignores: defaultIgnoreFileList,
    rules: {
      ...(storybookPlugin.configs?.["addon-interactions"] as ESLint.ConfigData).rules,
      ...(storybookPlugin.configs?.csf as ESLint.ConfigData).rules,
      ...(storybookPlugin.configs?.["csf-strict"] as ESLint.ConfigData).rules,
      ...(storybookPlugin.configs?.recommended as ESLint.ConfigData).rules,
      ...{}, // eslint-disable-line unicorn/no-useless-spread
    },
  },
  {
    files: [...javascriptFamilyFileList, ...jsonFamilyFileList, ...tomlFileList, ...yamlFileList],
    ignores: defaultIgnoreFileList,
    plugins: {
      "json-schema-validator": jsonSchemaValidatorPlugin,
    },
    rules: {
      ...(jsonSchemaValidatorPlugin.configs?.recommended as ESLint.ConfigData).rules,
      "json-schema-validator/no-invalid": ["error"],
    },
  },
  {
    files: [".github/**/*.yaml"],
    ignores: defaultIgnoreFileList,
    rules: {
      "json-schema-validator/no-invalid": ["off"],
    },
  },
  {
    files: [
      ...javascriptFamilyFileExtensionList.map((fileExtension) => `**/*.config${fileExtension}`),
      ...javascriptFamilyFileExtensionList.map((fileExtension) => `**/.storybook/*${fileExtension}`),
      ...javascriptFamilyFileExtensionList.map((fileExtension) => `**/*.stories${fileExtension}`),
    ],
    ignores: defaultIgnoreFileList,
    rules: {
      "import-x/no-default-export": ["off"],
    },
  },
  {
    files: ["**/*.d.ts"],
    ignores: defaultIgnoreFileList,
    rules: {
      "import-x/no-default-export": ["off"],
    },
  },
  {
    files: ["**/*.md/**"],
    ignores: defaultIgnoreFileList,
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          impliedStrict: true,
        },
      },
    },
    plugins: {
      react: reactPlugin,
    },
    rules: {
      ...(markdownPlugin.configs?.recommended as ESLint.ConfigData).overrides?.[1]?.rules,
      "@typescript-eslint/no-unused-vars": ["off"],
      "formatjs/no-literal-string-in-jsx": ["off"],
      "import-x/no-default-export": ["off"],
      "import-x/no-extraneous-dependencies": ["off"],
      "react/jsx-filename-extension": [
        "error",
        {
          extensions: [".jsx", ".tsx"],
        },
      ],
      "react/jsx-no-undef": ["off"],
      "react/react-in-jsx-scope": ["off"],
    },
  },
];

export const nextEslintConfig = [
  {
    files: javascriptFamilyFileList,
    ignores: defaultIgnoreFileList,
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: {
      ...(nextPlugin.configs?.recommended as ESLint.ConfigData).rules,
      ...(nextPlugin.configs?.["core-web-vitals"] as ESLint.ConfigData).rules,
      "import-x/no-anonymous-default-export": "warn",
      "jsx-a11y/alt-text": [
        "warn",
        {
          elements: ["img"],
          img: ["Image"],
        },
      ],
      "jsx-a11y/aria-props": "warn",
      "jsx-a11y/aria-proptypes": "warn",
      "jsx-a11y/aria-unsupported-elements": "warn",
      "jsx-a11y/role-has-required-aria-props": "warn",
      "jsx-a11y/role-supports-aria-props": "warn",
      "react/jsx-no-target-blank": "off",
      "react/no-unknown-property": "off",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
    },
    settings: {
      "import-x/resolver": {
        typescript: {
          alwaysTryTypes: true,
        },
      },
      react: {
        version: "detect",
      },
    },
  },
  {
    files: ["src/app/**", "src/page/**"],
    ignores: defaultIgnoreFileList,
    rules: {
      "import-x/no-default-export": ["off"],
    },
  },
];

export const graphqlEslintConfig = [
  {
    files: ["**/*.graphql"],
    ignores: defaultIgnoreFileList,
    languageOptions: {
      parser: graphqlEslint,
    },
    plugins: {
      "@graphql-eslint": graphqlEslint,
    },
    rules: {
      ...graphqlEslint.configs["schema-recommended"].rules, // eslint-disable-line import-x/no-named-as-default-member
      ...graphqlEslint.configs["schema-all"].rules, // eslint-disable-line import-x/no-named-as-default-member
      ...graphqlEslint.configs.relay.rules, // eslint-disable-line import-x/no-named-as-default-member
      "@graphql-eslint/relay-edge-types": [
        "error",
        {
          listTypeCanWrapOnlyEdgeType: false,
        },
      ],
      "@graphql-eslint/require-description": [
        "error",
        {
          DirectiveDefinition: true,
          EnumValueDefinition: true,
          FieldDefinition: true,
          InputValueDefinition: true,
          rootField: true,
          types: true,
        },
      ],
      "@graphql-eslint/strict-id-in-types": ["off"],
    },
  },
];
