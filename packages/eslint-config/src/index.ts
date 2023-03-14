import eslintCommentsPlugin from "@eslint-community/eslint-plugin-eslint-comments";
import nextPlugin from "@next/eslint-plugin-next";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import type { ESLint, Linter } from "eslint";
import airbnbBaseConfigBestPractices from "eslint-config-airbnb-base/rules/best-practices";
import airbnbBaseConfigErrors from "eslint-config-airbnb-base/rules/errors";
import airbnbBaseConfigEs6 from "eslint-config-airbnb-base/rules/es6";
import airbnbBaseConfigImports from "eslint-config-airbnb-base/rules/imports";
import airbnbBaseConfigNode from "eslint-config-airbnb-base/rules/node";
import airbnbBaseConfigStrict from "eslint-config-airbnb-base/rules/strict";
import airbnbBaseConfigStyle from "eslint-config-airbnb-base/rules/style";
import airbnbBaseConfigVariables from "eslint-config-airbnb-base/rules/variables";
import airbnbBaseTypescriptConfig from "eslint-config-airbnb-typescript/lib/shared";
import airbnbConfigReact from "eslint-config-airbnb/rules/react";
import airbnbConfigReactA11y from "eslint-config-airbnb/rules/react-a11y";
import airbnbConfigReactHooks from "eslint-config-airbnb/rules/react-hooks";
import arrayFuncPlugin from "eslint-plugin-array-func";
import formatJsPlugin from "eslint-plugin-formatjs";
import importPlugin from "eslint-plugin-import";
import jsoncPlugin from "eslint-plugin-jsonc";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
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
import jsoncParser from "jsonc-eslint-parser";
import tomlParser from "toml-eslint-parser";
import yamlParser from "yaml-eslint-parser";

export const baseKeyOrder = [
  "id",
  "name",
  "version",
  "description",
  "author",
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
  "**/.yarn/**",
  "**/build",
  "**/dist",
  "**/node_modules",
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

export const jsonFamilyRules: Linter.RulesRecord = {
  "jsonc/array-bracket-newline": ["error", "consistent"],
  "jsonc/array-bracket-spacing": ["error"],
  "jsonc/comma-style": ["error"],
  "jsonc/indent": ["error", 2],
  "jsonc/key-spacing": ["error"],
  "jsonc/object-curly-newline": ["error"],
  "jsonc/object-curly-spacing": ["error", "always"],
  "jsonc/object-property-newline": ["error"],
  "jsonc/sort-keys": ["error", {
    order: defaultKeyOrder,
    pathPattern: "^.*$",
  }],
  "no-multiple-empty-lines": ["error", { max: 0 }],
  "no-trailing-spaces": ["error"],
};

export const allowedAbbreviations = {
  "eslint-plugin-array-func.d": true,
  "eslint-plugin-react-use-props.d": true,
  "next-env.d": true,
  "next-env.override.d": true,
};

export const eslintConfig: Linter.FlatConfig[] = [
  {
    files: jsonFileList,
    ignores: [...defaultIgnoreFileList, "package-lock.json"],
    languageOptions: {
      // @ts-ignore
      parser: jsoncParser,
    },
    plugins: {
      jsonc: (jsoncPlugin as unknown) as ESLint.Plugin,
    },
    rules: {
      ...jsoncPlugin.configs.base.overrides[0].rules as Linter.RulesRecord,
      ...jsoncPlugin.configs["recommended-with-json"].rules as Linter.RulesRecord,
      ...jsonFamilyRules,
    },
  },
  {
    files: json5FileList,
    ignores: defaultIgnoreFileList,
    languageOptions: {
      // @ts-ignore
      parser: jsoncParser,
    },
    plugins: {
      jsonc: (jsoncPlugin as unknown) as ESLint.Plugin,
    },
    rules: {
      ...jsoncPlugin.configs.base.overrides[0].rules as Linter.RulesRecord,
      ...jsoncPlugin.configs["recommended-with-json5"].rules as Linter.RulesRecord,
      ...jsonFamilyRules,
    },
  },
  {
    files: jsoncFileList,
    ignores: defaultIgnoreFileList,
    languageOptions: {
      // @ts-ignore
      parser: jsoncParser,
    },
    plugins: {
      jsonc: (jsoncPlugin as unknown) as ESLint.Plugin,
    },
    rules: {
      ...jsoncPlugin.configs.base.overrides[0].rules as Linter.RulesRecord,
      ...jsoncPlugin.configs["recommended-with-jsonc"].rules as Linter.RulesRecord,
      ...jsonFamilyRules,
    },
  },
  {
    files: ["**/*.toml"],
    ignores: defaultIgnoreFileList,
    languageOptions: {
      // @ts-ignore
      parser: tomlParser,
    },
    plugins: {
      toml: tomlPlugin,
    },
    rules: {
      ...tomlPlugin.configs!.base.overrides![0].rules as Linter.RulesRecord,
      ...tomlPlugin.configs!.standard.rules as Linter.RulesRecord,
      "no-multiple-empty-lines": ["error", { max: 1 }],
      "no-trailing-spaces": ["error"],
      "toml/array-bracket-spacing": ["error", "never"],
    },
  },
  {
    files: ["**/*.yaml", "**/*.yml"],
    ignores: defaultIgnoreFileList,
    languageOptions: {
      // @ts-ignore
      parser: yamlParser,
    },
    plugins: {
      yml: yamlPlugin,
    },
    rules: {
      // @ts-ignore
      ...yamlPlugin.configs.base.overrides[0].rules as Linter.RulesRecord,
      // @ts-ignore
      ...yamlPlugin.configs.standard.rules as Linter.RulesRecord,
      "no-multiple-empty-lines": ["error", { max: 0 }],
      "no-trailing-spaces": ["error"],
      "yml/block-sequence": ["error", "always"],
      "yml/no-multiple-empty-lines": ["error"],
      "yml/sort-keys": ["error", {
        order: defaultKeyOrder,
        pathPattern: "^.*$",
      }],
    },
  },
  {
    files: [
      "**/.github/workflows/*.yaml",
      "**/.github/workflows/*.yml",
    ],
    ignores: [...defaultIgnoreFileList, "**/*.yarnrc.yml"],
    rules: {
      "yml/sort-keys": ["error", {
        order: githubWorkflowKeyOrder,
        pathPattern: ".*",
      }],
    },
  },
  {
    files: ["**/*.yaml", "**/*.yml"],
    ignores: [...defaultIgnoreFileList, "**/*.yarnrc.yml"],
    rules: {
      "yml/file-extension": ["error"],
    },
  },
  {
    files: [
      "**/*.cjs",
      "**/*.cts",
      "**/*.d.ts",
      "**/*.js",
      "**/*.jsx",
      "**/*.mjs",
      "**/*.mts",
      "**/*.ts",
      "**/*.tsx",
    ],
    ignores: defaultIgnoreFileList,
    languageOptions: {
      // @ts-ignore
      parser: typescriptParser,
      parserOptions: {
        project: "tsconfig.json",
      },
    },
    plugins: {
      "@eslint-community/eslint-comments": eslintCommentsPlugin,
      "@next/next": nextPlugin,
      "@typescript-eslint": typescriptPlugin,
      "array-func": arrayFuncPlugin,
      "formatjs": formatJsPlugin,
      "import": importPlugin,
      "jsx-a11y": jsxA11yPlugin,
      "promise": promisePlugin,
      "react": reactPlugin,
      "react-hooks": reactHooksPlugin,
      "react-use-props": reactUsePropsPlugin,
      "regexp": regexpPlugin,
      "sonarjs": sonarjsPlugin as ESLint.Plugin,
      "sort-destructure-keys": sortDestructureKeysPlugin,
      "tailwindcss": tailwindCssPlugin,
      "typescript-sort-keys": typescriptSortKeysPlugin,
      "unicorn": unicornPlugin,
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
      ...airbnbBaseTypescriptConfig.rules,
      ...airbnbConfigReact.rules,
      ...airbnbConfigReactA11y.rules,
      ...airbnbConfigReactHooks.rules,
      ...nextPlugin.configs!.recommended.rules,
      ...nextPlugin.configs!["core-web-vitals"].rules,
      ...typescriptPlugin.configs!.base.rules,
      ...typescriptPlugin.configs!["eslint-recommended"]!.overrides![0].rules,
      ...typescriptPlugin.configs!["recommended-requiring-type-checking"].rules,
      ...arrayFuncPlugin.configs!.recommended.rules,
      ...arrayFuncPlugin.configs!.all.rules,
      ...eslintCommentsPlugin.configs!.recommended.rules,
      ...importPlugin.configs!.recommended.rules,
      ...importPlugin.configs!.typescript.rules,
      ...regexpPlugin.configs!.all.rules,
      ...promisePlugin.configs!.recommended.rules,
      ...sonarjsPlugin.configs.recommended.rules,
      ...tailwindCssPlugin.configs!.recommended.rules,
      ...typescriptSortKeysPlugin.configs!.recommended.rules,
      ...unicornPlugin.configs!.recommended.rules,
      "@eslint-community/eslint-comments/disable-enable-pair": ["error", {
        allowWholeFile: true,
      }],
      "@next/next/google-font-display": ["off"],
      "@typescript-eslint/quotes": ["error", "double", { avoidEscape: true }],
      "array-func/prefer-array-from": ["off"],
      "formatjs/enforce-default-message": ["error"],
      "formatjs/enforce-id": ["error", {
        idInterpolationPattern: "[sha512:contenthash:base64:6]",
      }],
      "formatjs/enforce-placeholders": ["error"],
      "formatjs/no-literal-string-in-jsx": ["error"],
      "formatjs/no-multiple-whitespaces": ["error"],
      "function-paren-newline": ["off", "consistent"],
      "import/no-anonymous-default-export": ["error"],
      "import/no-default-export": ["error"],
      "import/prefer-default-export": ["off"],
      "jsx-a11y/anchor-is-valid": ["error", {
        aspects: ["invalidHref", "preferButton"],
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
      }],
      "jsx-a11y/label-has-associated-control": ["error", {
        assert: "either",
      }],
      "jsx-a11y/no-autofocus": ["off"],
      "max-len": ["error", {
        code: 120,
        ignoreComments: false,
        ignorePattern: "^(ex|im)port (.*)",
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreUrls: true,
        tabWidth: 2,
      }],
      "no-continue": ["off"],
      "no-multiple-empty-lines": ["error", {
        max: 1,
      }],
      "no-restricted-syntax": ["error", "LabeledStatement", "WithStatement"],
      "object-curly-newline": ["error", {
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
      }],
      "quote-props": ["error", "consistent-as-needed"],
      "react/forbid-component-props": ["error", {
        forbid: [{
          allowedFor: ["FormattedList", "FormattedNumber"],
          message: "Use the `className` property instead",
          propName: "style",
        }],
      }],
      "react/forbid-dom-props": ["error", {
        forbid: [{
          message: "Use the `className` property instead",
          propName: "style",
        }],
      }],
      "react/function-component-definition": ["error", {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      }],
      "react/jsx-sort-props": ["error"],
      "react/style-prop-object": ["off"],
      "react-hooks/exhaustive-deps": ["off"],
      "sonarjs/cognitive-complexity": ["off"],
      "sonarjs/no-duplicate-string": ["off"],
      "sort-destructure-keys/sort-destructure-keys": ["error"],
      "sort-imports": ["error", {
        ignoreDeclarationSort: true,
      }],
      "sort-keys": ["error", "asc", {
        natural: true,
      }],
      "sort-vars": ["error"],
      "tailwindcss/classnames-order": ["error"],
      "tailwindcss/enforces-negative-arbitrary-values": ["error"],
      "tailwindcss/enforces-shorthand": ["error"],
      "tailwindcss/migration-from-tailwind-2": ["error"],
      "tailwindcss/no-arbitrary-value": ["error"],
      "tailwindcss/no-custom-classname": ["error"],
      "unicorn/custom-error-definition": ["error"],
      "unicorn/no-null": ["off"],
      "unicorn/prefer-at": ["error"],
      "unicorn/prefer-event-target": ["error"],
      "unicorn/prefer-string-replace-all": ["error"],
      "unicorn/prevent-abbreviations": ["error", {
        allowList: allowedAbbreviations,
      }],
      "unicorn/template-indent": ["error", {
        comments: ["HTML"],
        selectors: ["TemplateLiteral"],
      }],
    },
    settings: {
      ...airbnbBaseConfigImports.settings,
      ...airbnbBaseTypescriptConfig.settings,
      ...airbnbConfigReact.settings,
      ...typescriptPlugin.configs!["recommended-requiring-type-checking"].settings,
    },
  },
];

export default eslintConfig;
