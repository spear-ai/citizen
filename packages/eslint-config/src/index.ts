import eslintCommentsPlugin from "@eslint-community/eslint-plugin-eslint-comments";
import nextPlugin from "@next/eslint-plugin-next";
import graphqlEslint from "@graphql-eslint/eslint-plugin";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser"; // eslint-disable-line import/no-unresolved
import type { ESLint, Linter } from "eslint";
import airbnbBaseConfigBestPractices from "eslint-config-airbnb-base/rules/best-practices";
import airbnbBaseConfigErrors from "eslint-config-airbnb-base/rules/errors";
import airbnbBaseConfigEs6 from "eslint-config-airbnb-base/rules/es6";
import airbnbBaseConfigImports from "eslint-config-airbnb-base/rules/imports";
import airbnbBaseConfigNode from "eslint-config-airbnb-base/rules/node";
import airbnbBaseConfigStrict from "eslint-config-airbnb-base/rules/strict";
import airbnbBaseConfigStyle from "eslint-config-airbnb-base/rules/style";
import airbnbBaseConfigVariables from "eslint-config-airbnb-base/rules/variables";
import airbnbTypescriptConfigShared from "eslint-config-airbnb-typescript/lib/shared";
import airbnbTypescriptConfig from "eslint-config-airbnb-typescript";
import airbnbConfigReact from "eslint-config-airbnb/rules/react";
import airbnbConfigReactA11y from "eslint-config-airbnb/rules/react-a11y";
import airbnbConfigReactHooks from "eslint-config-airbnb/rules/react-hooks";
import arrayFuncPlugin from "eslint-plugin-array-func";
import formatJsPlugin from "eslint-plugin-formatjs";
import importPlugin from "eslint-plugin-import";
import jsoncPlugin from "eslint-plugin-jsonc";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import jsonSchemaValidatorPlugin from "eslint-plugin-json-schema-validator";
import markdownPlugin from "eslint-plugin-markdown";
import markdownProcessor from "eslint-plugin-markdown/lib/processor";
// import markdownlintPlugin from "eslint-plugin-markdownlint";
// import markdownlintParser from "eslint-plugin-markdownlint/parser";
import promisePlugin from "eslint-plugin-promise";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import reactUsePropsPlugin from "eslint-plugin-react-use-props";
import regexpPlugin from "eslint-plugin-regexp";
import sonarjsPlugin from "eslint-plugin-sonarjs";
import sortDestructureKeysPlugin from "eslint-plugin-sort-destructure-keys";
import tailwindCssPlugin from "eslint-plugin-tailwindcss";
import tomlPlugin from "eslint-plugin-toml";
import yamlPlugin from "eslint-plugin-yml";
import typescriptSortKeysPlugin from "eslint-plugin-typescript-sort-keys";
import unicornPlugin from "eslint-plugin-unicorn";
import globals from "globals";
import jsoncParser from "jsonc-eslint-parser";
import tomlParser from "toml-eslint-parser";
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
  "**/turbo.json",
];

export const jsonFamilyFileList = [...jsonFileList, ...json5FileList, ...jsoncFileList];

export const jsonFamilyRules: Linter.RulesRecord = {
  "jsonc/array-bracket-newline": ["error", "consistent"],
  "jsonc/array-bracket-spacing": ["error"],
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

export const javascriptFamilyFileList = [...javascriptFileList, ...typescriptFileList];

export const baseEslintConfig: Linter.FlatConfig[] = [
  {
    files: jsonFileList,
    ignores: [...defaultIgnoreFileList, "package-lock.json"],
    languageOptions: {
      parser: jsoncParser,
    },
    plugins: {
      jsonc: jsoncPlugin as unknown as ESLint.Plugin,
    },
    rules: {
      ...(jsoncPlugin.configs.base.overrides[0].rules as Linter.RulesRecord),
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
      ...(jsoncPlugin.configs.base.overrides[0].rules as Linter.RulesRecord),
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
      ...(jsoncPlugin.configs.base.overrides[0].rules as Linter.RulesRecord),
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
      ...(tomlPlugin.configs.base.overrides[0].rules as Linter.RulesRecord),
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
      ...(yamlPlugin.configs.base.overrides[0].rules as Linter.RulesRecord),
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
  // {
  //   files: ["**/*.md"],
  //   languageOptions: {
  //     // @ts-ignore
  //     parser: markdownlintParser,
  //   },
  //   plugins: {
  //     markdownlint: markdownlintPlugin,
  //   },
  //   rules: {
  //     ...markdownlintPlugin.configs!.recommended.rules as Linter.RulesRecord,
  //   },
  // },
  {
    files: [...javascriptFileList, ...typescriptFileList],
    ignores: defaultIgnoreFileList,
    languageOptions: {
      parser: typescriptParser,
      parserOptions: { sourceType: "module" },
    },
    plugins: {
      "@eslint-community/eslint-comments": eslintCommentsPlugin,
      "@typescript-eslint": typescriptPlugin as unknown as ESLint.Plugin,
      "array-func": arrayFuncPlugin,
      formatjs: formatJsPlugin,
      import: importPlugin,
      "jsx-a11y": jsxA11yPlugin,
      markdown: markdownPlugin,
      promise: promisePlugin,
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      "react-use-props": reactUsePropsPlugin,
      regexp: regexpPlugin,
      sonarjs: sonarjsPlugin as ESLint.Plugin,
      "sort-destructure-keys": sortDestructureKeysPlugin,
      tailwindcss: tailwindCssPlugin,
      unicorn: unicornPlugin,
    },
    rules: {
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
      ...(arrayFuncPlugin.configs?.recommended as ESLint.ConfigData).rules,
      ...(arrayFuncPlugin.configs?.all as ESLint.ConfigData).rules,
      ...(eslintCommentsPlugin.configs?.recommended as ESLint.ConfigData).rules,
      ...(importPlugin.configs?.recommended as ESLint.ConfigData).rules,
      ...(regexpPlugin.configs?.all as ESLint.ConfigData).rules,
      ...(promisePlugin.configs?.recommended as ESLint.ConfigData).rules,
      ...sonarjsPlugin.configs.recommended.rules,
      ...(tailwindCssPlugin.configs?.recommended as ESLint.ConfigData).rules,
      ...(unicornPlugin.configs?.recommended as ESLint.ConfigData).rules,
      "@eslint-community/eslint-comments/disable-enable-pair": [
        "error",
        {
          allowWholeFile: true,
        },
      ],
      "@next/next/google-font-display": ["off"],
      "array-func/prefer-array-from": ["off"],
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
      "import/no-anonymous-default-export": ["error"],
      "import/no-default-export": ["error"],
      "import/prefer-default-export": ["off"],
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
      "lines-between-class-members": ["error", "always", { exceptAfterSingleLine: false }],
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
      "react/style-prop-object": ["off"],
      "react-hooks/exhaustive-deps": ["off"],
      "sonarjs/cognitive-complexity": ["off"],
      "sonarjs/no-duplicate-string": ["off"],
      "sort-destructure-keys/sort-destructure-keys": ["error"],
      "sort-imports": [
        "error",
        {
          ignoreDeclarationSort: true,
        },
      ],
      "sort-keys": [
        "error",
        "asc",
        {
          natural: true,
        },
      ],
      "sort-vars": ["error"],
      "tailwindcss/classnames-order": ["error"],
      "tailwindcss/enforces-negative-arbitrary-values": ["error"],
      "tailwindcss/enforces-shorthand": ["error"],
      "tailwindcss/migration-from-tailwind-2": ["error"],
      "tailwindcss/no-arbitrary-value": ["error"],
      "tailwindcss/no-custom-classname": ["error"],
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
      "import/resolver": {
        node: {
          extensions: [...javascriptFileExtensionList, ...typescriptFileExtensionList, ".json"],
        },
      },
    },
  },
  {
    files: typescriptFileList,
    ignores: [...defaultIgnoreFileList, "**/*.md/**"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        parserOptions: { sourceType: "module" },
        project: "tsconfig.json",
      },
    },
    plugins: {
      "@typescript-eslint": typescriptPlugin as unknown as ESLint.Plugin,
      import: importPlugin as unknown as ESLint.Plugin,
      "typescript-sort-keys": typescriptSortKeysPlugin,
    },
    rules: {
      ...airbnbTypescriptConfigShared.rules,
      ...airbnbTypescriptConfig.rules,
      ...(typescriptPlugin.configs?.base as ESLint.ConfigData).rules,
      ...(typescriptPlugin.configs?.["eslint-recommended"] as ESLint.ConfigData).overrides?.[0].rules,
      ...(typescriptPlugin.configs?.["stylistic-type-checked"] as ESLint.ConfigData).rules,
      ...(typescriptPlugin.configs?.["strict-type-checked"] as ESLint.ConfigData).rules,
      ...(importPlugin.configs?.typescript as ESLint.ConfigData).rules,
      ...(typescriptSortKeysPlugin.configs?.recommended as ESLint.ConfigData).rules,
      "@typescript-eslint/quotes": ["error", "double", { avoidEscape: true }],
      "lines-between-class-members": ["error", "always", { exceptAfterSingleLine: false }],
    },
  },
  {
    files: [...javascriptFamilyFileList, ...jsonFamilyFileList, ...tomlFileList, ...yamlFileList],
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
    rules: {
      "json-schema-validator/no-invalid": ["off"],
    },
  },
  {
    files: ["**/*.config.*", "**/*.test.*", "**/__test__/**"],
    rules: {
      "import/no-extraneous-dependencies": ["off"],
    },
  },
  {
    files: ["**/*.config.*"],
    rules: {
      "import/no-default-export": ["off"],
    },
  },
  {
    files: ["**/*.d.ts"],
    rules: {
      "import/no-default-export": ["off"],
    },
  },
  {
    files: ["**/*.md/**"],
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
      ...(markdownPlugin.configs?.recommended as ESLint.ConfigData).overrides?.[1].rules,
      "formatjs/no-literal-string-in-jsx": ["off"],
      "import/no-default-export": ["off"],
      "import/no-extraneous-dependencies": ["off"],
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
    files: [...javascriptFileList, ...typescriptFileList],
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
      "import/no-anonymous-default-export": "warn",
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
      "import/resolver": {
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
    rules: {
      "import/no-default-export": ["off"],
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
      ...(graphqlEslint.configs?.["schema-recommended"] as ESLint.ConfigData).rules,
      ...(graphqlEslint.configs?.["schema-all"] as ESLint.ConfigData).rules,
      ...(graphqlEslint.configs?.relay as ESLint.ConfigData).rules,
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
