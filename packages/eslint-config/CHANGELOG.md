# @spear-ai/eslint-config

## 4.0.0

### Major Changes

- [#87](https://github.com/spear-ai/citizen/pull/87) [`1ff4290`](https://github.com/spear-ai/citizen/commit/1ff429025003be3fe60950a612a0b78416a60f7e) Thanks [@psirenny](https://github.com/psirenny)! - Add GraphQL rules to ESLint Config 🎉

## 3.0.1

### Patch Changes

- [#77](https://github.com/spear-ai/citizen/pull/77) [`b1b0462`](https://github.com/spear-ai/citizen/commit/b1b04626932172cfbd616103055c05e1b23b0f75) Thanks [@psirenny](https://github.com/psirenny)! - Declare globals in ESLint flat config’s `languageOptions` field instead of the deprecated `settings` field. 🐛

- [#78](https://github.com/spear-ai/citizen/pull/78) [`c92566e`](https://github.com/spear-ai/citizen/commit/c92566e77ea5c3e33cb5eaff3cff78bfc7790281) Thanks [@psirenny](https://github.com/psirenny)! - Remove `.turbo` directory from published NPM package. 🐛

## 3.0.0

### Major Changes

- [#60](https://github.com/spear-ai/citizen/pull/60) [`6caed20`](https://github.com/spear-ai/citizen/commit/6caed2031d99f4e3fe68533d11f2df94c44122e6) Thanks [@psirenny](https://github.com/psirenny)! - Rename base ESLint Config export.

### Patch Changes

- [#58](https://github.com/spear-ai/citizen/pull/58) [`84abe2e`](https://github.com/spear-ai/citizen/commit/84abe2e5501d2581c2ea2d062796ce50d86a489e) Thanks [@psirenny](https://github.com/psirenny)! - Add Tailwind CSS config file path (Assumes ES Module package). 🐛

- [#58](https://github.com/spear-ai/citizen/pull/58) [`84abe2e`](https://github.com/spear-ai/citizen/commit/84abe2e5501d2581c2ea2d062796ce50d86a489e) Thanks [@psirenny](https://github.com/psirenny)! - Add missing React rules to Next.js ESLint Config. 🐛

## 2.0.0

### Major Changes

- [#56](https://github.com/spear-ai/citizen/pull/56) [`1af292b`](https://github.com/spear-ai/citizen/commit/1af292bc44a309cbb4a7c51dcb3dfb12d3695e06) Thanks [@psirenny](https://github.com/psirenny)! - Remove default export from the ESLint Config. Use a named import instead:

  ```js
  export { eslintConfig as default } from "@spear-ai/eslint-config";
  ```

### Minor Changes

- [#52](https://github.com/spear-ai/citizen/pull/52) [`a4bd8aa`](https://github.com/spear-ai/citizen/commit/a4bd8aaf50863420f37e563dd5a0191a210baf15) Thanks [@psirenny](https://github.com/psirenny)! - Add React rules to ESLint Config 🎉

- [#56](https://github.com/spear-ai/citizen/pull/56) [`1af292b`](https://github.com/spear-ai/citizen/commit/1af292bc44a309cbb4a7c51dcb3dfb12d3695e06) Thanks [@psirenny](https://github.com/psirenny)! - Add markdown files to ESLint Config 🎉

- [#45](https://github.com/spear-ai/citizen/pull/45) [`cb012f9`](https://github.com/spear-ai/citizen/commit/cb012f9b441297d3ee956846ed15ba26635ac9dd) Thanks [@psirenny](https://github.com/psirenny)! - Add FormatJS rules to ESLint Config 🎉

### Patch Changes

- [#57](https://github.com/spear-ai/citizen/pull/57) [`91e4566`](https://github.com/spear-ai/citizen/commit/91e4566cd0dc468c435904a0ac4e5f916a2344d7) Thanks [@psirenny](https://github.com/psirenny)! - Ignore special markdown files (CHANGELOG.md, README.md) when linting file names. 🐛

## 1.0.2

### Patch Changes

- [#34](https://github.com/spear-ai/citizen/pull/34) [`e28bd25`](https://github.com/spear-ai/citizen/commit/e28bd2576be0e59a3db65c712b1e2da3d5a85211) Thanks [@psirenny](https://github.com/psirenny)! - Fix publish packages script. 🐛

## 1.0.1

### Patch Changes

- [#31](https://github.com/spear-ai/citizen/pull/31) [`8048e77`](https://github.com/spear-ai/citizen/commit/8048e77e90861f3bcbbbb28dcf317aa0e8732f3b) Thanks [@psirenny](https://github.com/psirenny)! - Add basic ESLint config package. 🎉
