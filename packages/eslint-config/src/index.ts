import * as graphqlEslint from "@graphql-eslint/eslint-plugin";
import nextPlugin from "@next/eslint-plugin-next";
import stylisticPlugin from "@stylistic/eslint-plugin"; // eslint-disable-line import-x/default, import-x/namespace, import-x/no-deprecated, import-x/no-named-as-default, import-x/no-named-as-default-member
import type { ESLint, Linter } from "eslint";
import formatJsPlugin from "eslint-plugin-formatjs";
import importPluginX, { configs as importXConfigs } from "eslint-plugin-import-x";
import jsonSchemaValidatorPlugin from "eslint-plugin-json-schema-validator";
import jsoncPlugin from "eslint-plugin-jsonc";
import markdownPlugin from "eslint-plugin-markdown";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import reactUsePropsPlugin from "eslint-plugin-react-use-props";
import regexpPlugin from "eslint-plugin-regexp";
import simpleImportSortPlugin from "eslint-plugin-simple-import-sort";
import sonarjsPlugin from "eslint-plugin-sonarjs";
import sortDestructureKeysPlugin from "eslint-plugin-sort-destructure-keys";
import tomlPlugin from "eslint-plugin-toml";
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
  "**/node_modules/**",
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

const isObjectRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const isRulesRecord = (value: unknown): value is Linter.RulesRecord => isObjectRecord(value);
const isUnknownArray = (value: unknown): value is unknown[] => Array.isArray(value);

const getRules = (config: unknown): Linter.RulesRecord => {
  if (!isObjectRecord(config)) {
    return {};
  }

  return isRulesRecord(config.rules) ? config.rules : {};
};

const getFirstOverrideRules = (config: unknown): Linter.RulesRecord => {
  if (!isObjectRecord(config) || !isUnknownArray(config.overrides)) {
    return {};
  }

  const [firstOverride] = config.overrides;

  if (!isObjectRecord(firstOverride)) {
    return {};
  }

  return isRulesRecord(firstOverride.rules) ? firstOverride.rules : {};
};

const jsoncConfigs = jsoncPlugin.configs; // eslint-disable-line import-x/no-named-as-default-member

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

export const baseEslintConfig: Linter.Config[] = [
  {
    ignores: defaultIgnoreFileList,
  },
  {
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
      jsonc: jsoncPlugin,
    },
    rules: {
      ...getFirstOverrideRules(jsoncConfigs?.base),
      ...getRules(jsoncConfigs?.["recommended-with-json"]),
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
      jsonc: jsoncPlugin,
    },
    rules: {
      ...getFirstOverrideRules(jsoncConfigs?.base),
      ...getRules(jsoncConfigs?.["recommended-with-json5"]),
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
      jsonc: jsoncPlugin,
    },
    rules: {
      ...getFirstOverrideRules(jsoncConfigs?.base),
      ...getRules(jsoncConfigs?.["recommended-with-jsonc"]),
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
      "toml/array-bracket-newline": ["error", "consistent"],
      "toml/array-bracket-spacing": ["off"],
      "toml/inline-table-curly-spacing": ["off"],
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
    plugins: {
      markdown: markdownPlugin,
    },
    processor: "markdown/markdown",
  },
  {
    files: javascriptFamilyFileList,
    ignores: defaultIgnoreFileList,
    languageOptions: {
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
      "@stylistic": stylisticPlugin,
      "@typescript-eslint": typescriptEslintPlugin,
      formatjs: formatJsPlugin,
      "import-x": importPluginX,
      markdown: markdownPlugin,
      "react-hooks": reactHooksPlugin,
      "react-use-props": reactUsePropsPlugin,
      regexp: regexpPlugin,
      "simple-import-sort": simpleImportSortPlugin,
      sonarjs: sonarjsPlugin,
      "sort-destructure-keys": sortDestructureKeysPlugin,
      unicorn: unicornPlugin,
    },
    rules: {
      ...typescriptEslintConfigs.base.rules,
      ...typescriptEslintConfigs.eslintRecommended.rules,
      ...getRules(typescriptEslintConfigs.stylisticTypeChecked[2]),
      ...getRules(typescriptEslintConfigs.strictTypeChecked[2]),
      ...importXConfigs.recommended.rules,
      ...importXConfigs.typescript.rules,
      ...(regexpPlugin.configs?.all as ESLint.ConfigData).rules,
      ...(sonarjsPlugin.configs?.recommended as ESLint.ConfigData).rules,
      // ...stylisticPlugin.configs["recommended-flat"].rules,
      ...(unicornPlugin.configs?.recommended as ESLint.ConfigData).rules,
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
      "@typescript-eslint/related-getter-setter-pairs": ["off"],
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
      "import-x/no-unused-modules": [
        "error",
        {
          missingExports: true,
          suppressMissingFileEnumeratorAPIWarning: true,
          unusedExports: true,
        },
      ],
      "import-x/no-useless-path-segments": ["error"],
      "import-x/prefer-default-export": ["off"],
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
      "quote-props": ["error", "consistent-as-needed"],
      quotes: ["error", "double", { avoidEscape: true }],
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
      "sort-keys": [
        "error",
        "asc",
        {
          caseSensitive: false,
          natural: true,
        },
      ],
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
      "@typescript-eslint/no-require-imports": ["off"],
      "@typescript-eslint/no-var-requires": ["off"],
    },
  },
  {
    files: javascriptFamilyInMarkdownFileList,
    ignores: defaultIgnoreFileList,
    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: {
        project: false,
        sourceType: "module",
      },
    },
    rules: {
      "@typescript-eslint/await-thenable": ["off"],
      "@typescript-eslint/consistent-type-assertions": ["off"],
      "@typescript-eslint/dot-notation": ["off"],
      "@typescript-eslint/no-array-delete": ["off"],
      "@typescript-eslint/no-base-to-string": ["off"],
      "@typescript-eslint/no-confusing-void-expression": ["off"],
      "@typescript-eslint/no-deprecated": ["off"],
      "@typescript-eslint/no-duplicate-type-constituents": ["off"],
      "@typescript-eslint/no-floating-promises": ["off"],
      "@typescript-eslint/no-for-in-array": ["off"],
      "@typescript-eslint/no-implied-eval": ["off"],
      "@typescript-eslint/no-meaningless-void-operator": ["off"],
      "@typescript-eslint/no-misused-promises": ["off"],
      "@typescript-eslint/no-misused-spread": ["off"],
      "@typescript-eslint/no-mixed-enums": ["off"],
      "@typescript-eslint/no-redundant-type-constituents": ["off"],
      "@typescript-eslint/no-require-imports": ["off"],
      "@typescript-eslint/no-throw-literal": ["off"],
      "@typescript-eslint/no-unnecessary-boolean-literal-compare": ["off"],
      "@typescript-eslint/no-unnecessary-condition": ["off"],
      "@typescript-eslint/no-unnecessary-template-expression": ["off"],
      "@typescript-eslint/no-unnecessary-type-arguments": ["off"],
      "@typescript-eslint/no-unnecessary-type-assertion": ["off"],
      "@typescript-eslint/no-unnecessary-type-conversion": ["off"],
      "@typescript-eslint/no-unnecessary-type-parameters": ["off"],
      "@typescript-eslint/no-unsafe-argument": ["off"],
      "@typescript-eslint/no-unsafe-assignment": ["off"],
      "@typescript-eslint/no-unsafe-call": ["off"],
      "@typescript-eslint/no-unsafe-declaration-merging": ["off"],
      "@typescript-eslint/no-unsafe-enum-comparison": ["off"],
      "@typescript-eslint/no-unsafe-member-access": ["off"],
      "@typescript-eslint/no-unsafe-return": ["off"],
      "@typescript-eslint/no-useless-default-assignment": ["off"],
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
      "@typescript-eslint/related-getter-setter-pairs": ["off"],
      "@typescript-eslint/require-await": ["off"],
      "@typescript-eslint/restrict-plus-operands": ["off"],
      "@typescript-eslint/restrict-template-expressions": ["off"],
      "@typescript-eslint/return-await": ["off"],
      "@typescript-eslint/strict-boolean-expressions": ["off"],
      "@typescript-eslint/unbound-method": ["off"],
      "@typescript-eslint/use-unknown-in-catch-callback-variable": ["off"],
      "import-x/no-unresolved": ["off"],
      "sonarjs/no-implicit-global": ["off"],
      "unicorn/prefer-bigint-literals": ["off"],
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
    rules: {
      ...(markdownPlugin.configs?.recommended as ESLint.ConfigData).overrides?.[1]?.rules,
      "@typescript-eslint/no-unused-vars": ["off"],
      "formatjs/no-literal-string-in-jsx": ["off"],
      "import-x/no-default-export": ["off"],
      "import-x/no-extraneous-dependencies": ["off"],
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
    },
    settings: {
      "import-x/resolver": {
        typescript: {
          alwaysTryTypes: true,
        },
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
      ...graphqlEslint.configs["schema-recommended"].rules,
      ...graphqlEslint.configs["schema-all"].rules,
      ...graphqlEslint.configs.relay.rules,
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
