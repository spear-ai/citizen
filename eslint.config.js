import {
  baseEslintConfig,
  javascriptFamilyFileList,
  javascriptFamilyInMarkdownFileList,
  prettierConfig,
} from "@spear-ai/eslint-config";

// Oxlint lints JavaScript and TypeScript, ESLint lints the remaining file types.
const eslintConfig = [
  {
    ignores: [
      ...javascriptFamilyFileList,
      ...javascriptFamilyInMarkdownFileList,
      "**/.venv",
      "pnpm-lock.yaml",
    ],
  },
  ...baseEslintConfig,
  prettierConfig,
  // Oxfmt orders package.json keys and keeps short TOML arrays on one line.
  {
    files: ["**/package.json"],
    rules: {
      "jsonc/sort-keys": ["off"],
    },
  },
  {
    files: ["**/*.toml"],
    rules: {
      "toml/array-element-newline": ["off"],
    },
  },
];

export default eslintConfig;
