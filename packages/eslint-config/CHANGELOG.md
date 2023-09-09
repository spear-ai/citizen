# @spear-ai/eslint-config

## 13.1.1

### Patch Changes

- [#276](https://github.com/spear-ai/citizen/pull/276) [`ab9f8e3`](https://github.com/spear-ai/citizen/commit/ab9f8e363a85c75931b4e8365d5b0613d417e345) Thanks [@psirenny](https://github.com/psirenny)! - Added ignore list when reporting unused directives.

## 13.1.0

### Minor Changes

- [#271](https://github.com/spear-ai/citizen/pull/271) [`4641b36`](https://github.com/spear-ai/citizen/commit/4641b36a7026bcd3607fb10d72bc521f2a1bf540) Thanks [@psirenny](https://github.com/psirenny)! - Allowed empty anonymous functions.

### Patch Changes

- [#272](https://github.com/spear-ai/citizen/pull/272) [`01e2a29`](https://github.com/spear-ai/citizen/commit/01e2a291dd4d22a13857810f65cd52e7f3201b97) Thanks [@psirenny](https://github.com/psirenny)! - Replaced the broken `eslint-comments/no-unused-disable` rule with an ESLint setting that warns on unused disable comments. ESLint will continue to throw an error on unused disable comments when warnings are restricted.

## 13.0.0

### Major Changes

- [#268](https://github.com/spear-ai/citizen/pull/268) [`3cbcb82`](https://github.com/spear-ai/citizen/commit/3cbcb82b9473bb3028cddc8b08ef194063a1c072) Thanks [@psirenny](https://github.com/psirenny)! - Refactored ESLint Config to consolidate TypeScript and JavaScript rules. Markdown code with Typescript code blocks disable any rules that require parser services.

## 12.0.2

### Patch Changes

- [#241](https://github.com/spear-ai/citizen/pull/241) [`4a4ee3e`](https://github.com/spear-ai/citizen/commit/4a4ee3e46acb4de297fec8c06e2b605c616afd23) Thanks [@psirenny](https://github.com/psirenny)! - Allowed variable names to have trailing underscores to avoid naming conflicts with keywords.

## 12.0.1

### Patch Changes

- [#236](https://github.com/spear-ai/citizen/pull/236) [`710a945`](https://github.com/spear-ai/citizen/commit/710a94513802cb9f5adb1b4dec13b6b761b961ef) Thanks [@psirenny](https://github.com/psirenny)! - Fixed ESLint Config’s comment capitalization rule to only apply to the first line.

## 12.0.0

### Major Changes

- [#234](https://github.com/spear-ai/citizen/pull/234) [`2dff403`](https://github.com/spear-ai/citizen/commit/2dff403483486d7782048b343c0c7c5abd91f635) Thanks [@psirenny](https://github.com/psirenny)! - Enforced warnings on uncapitalized comments in ESLint Config.

## 11.0.0

### Major Changes

- [#232](https://github.com/spear-ai/citizen/pull/232) [`aa9c1a1`](https://github.com/spear-ai/citizen/commit/aa9c1a14a6775b7af762a610c5a5c9bc2435abc7) Thanks [@psirenny](https://github.com/psirenny)! - Fixed regression in ESLint Config where interfaces were marked as preferred over types.

## 10.1.0

### Minor Changes

- [#231](https://github.com/spear-ai/citizen/pull/231) [`2d864e5`](https://github.com/spear-ai/citizen/commit/2d864e53a632139dc2c7e71397a34738dfb4fad3) Thanks [@psirenny](https://github.com/psirenny)! - Modified ESLint Config to remove newlines between imports.

## 10.0.0

### Major Changes

- [#224](https://github.com/spear-ai/citizen/pull/224) [`ff88d4b`](https://github.com/spear-ai/citizen/commit/ff88d4b29b1bd3eb7c2f65c24f77f566e8272882) Thanks [@psirenny](https://github.com/psirenny)! - Enforced function expressions in ESLint Config.

- [#221](https://github.com/spear-ai/citizen/pull/221) [`dc71c6e`](https://github.com/spear-ai/citizen/commit/dc71c6ee51ad15b435d0358842cc943d058e3273) Thanks [@psirenny](https://github.com/psirenny)! - Updated ESLint dependencies.

- [#225](https://github.com/spear-ai/citizen/pull/225) [`cecf757`](https://github.com/spear-ai/citizen/commit/cecf757c94795d8715910dd139ccabc92b701064) Thanks [@psirenny](https://github.com/psirenny)! - Re-enabled exhaustive dependency checking in React hooks.

- [#226](https://github.com/spear-ai/citizen/pull/226) [`a4533d6`](https://github.com/spear-ai/citizen/commit/a4533d67ecfa0ac1f3d0ced3b0d2888c525daf50) Thanks [@psirenny](https://github.com/psirenny)! - Improved ESLint sorting (object keys, imports, exports, etc.)

### Patch Changes

- [#218](https://github.com/spear-ai/citizen/pull/218) [`7213dc4`](https://github.com/spear-ai/citizen/commit/7213dc4250f4a2fe72034a46a5354da8053383e9) Thanks [@psirenny](https://github.com/psirenny)! - Disabled JSON Schema validation for GitHub Action workflows.

## 9.0.0

### Major Changes

- [#195](https://github.com/spear-ai/citizen/pull/195) [`4d61c06`](https://github.com/spear-ai/citizen/commit/4d61c06bc6a9a82e5165647f2a590eac072a615c) Thanks [@psirenny](https://github.com/psirenny)! - Disabled ESLint `import/no-default-export` rule in a Next.js project’s router directory.

## 8.0.0

### Major Changes

- [#194](https://github.com/spear-ai/citizen/pull/194) [`e504bbf`](https://github.com/spear-ai/citizen/commit/e504bbfdac089e746667b546adb7b6ef379d48e9) Thanks [@psirenny](https://github.com/psirenny)! - Disabled ESLint `import/no-default-export` rule in config files.

- [#194](https://github.com/spear-ai/citizen/pull/194) [`e504bbf`](https://github.com/spear-ai/citizen/commit/e504bbfdac089e746667b546adb7b6ef379d48e9) Thanks [@psirenny](https://github.com/psirenny)! - Disabled ESLint `import/no-extraneous-dependencies` rule in dev files.

- [#193](https://github.com/spear-ai/citizen/pull/193) [`b938e52`](https://github.com/spear-ai/citizen/commit/b938e52e718bfaa7b852bd3838b3f5bdc27865d4) Thanks [@psirenny](https://github.com/psirenny)! - Ignored common Node.js and Python cache directories in ESLint config.

## 7.0.2

### Patch Changes

- [#191](https://github.com/spear-ai/citizen/pull/191) [`fd77bbe`](https://github.com/spear-ai/citizen/commit/fd77bbeb08fd981e36368fa1de55ea92b93ed880) Thanks [@psirenny](https://github.com/psirenny)! - Fixed Git tags on release.

## 7.0.1

### Patch Changes

- [#189](https://github.com/spear-ai/citizen/pull/189) [`897e8eb`](https://github.com/spear-ai/citizen/commit/897e8ebb48b9651457aee5606bffbf8799397d24) Thanks [@psirenny](https://github.com/psirenny)! - Cut a new release.

## 7.0.0

### Major Changes

- [#181](https://github.com/spear-ai/citizen/pull/181) [`504fa30`](https://github.com/spear-ai/citizen/commit/504fa3045a4d78322b5b97a69a4a18bf4cc2928b) Thanks [@psirenny](https://github.com/psirenny)! - Allowed Tailwind CSS config file to be auto-detected.

### Patch Changes

- [#186](https://github.com/spear-ai/citizen/pull/186) [`fab7b89`](https://github.com/spear-ai/citizen/commit/fab7b895fe2ee781fb62c80f168be5fca17e7ec0) Thanks [@psirenny](https://github.com/psirenny)! - Updated dependencies.

## 6.0.0

### Major Changes

- [#129](https://github.com/spear-ai/citizen/pull/129) [`4b78a81`](https://github.com/spear-ai/citizen/commit/4b78a81e2c8814cedd990685568b0a1531e846f1) Thanks [@psirenny](https://github.com/psirenny)! - Added JSON Schema validation. 🎉

- [#129](https://github.com/spear-ai/citizen/pull/129) [`4b78a81`](https://github.com/spear-ai/citizen/commit/4b78a81e2c8814cedd990685568b0a1531e846f1) Thanks [@psirenny](https://github.com/psirenny)! - Added JSON Schema sorted properties. 🎉

## 5.0.1

### Patch Changes

- [#111](https://github.com/spear-ai/citizen/pull/111) [`d63be3a`](https://github.com/spear-ai/citizen/commit/d63be3a5ebbffcf61332546560370a6199444439) Thanks [@psirenny](https://github.com/psirenny)! - Removed `tailwindcss` from dependencies because it’s already a dev dependency.

## 5.0.0

### Major Changes

- [#126](https://github.com/spear-ai/citizen/pull/126) [`3649055`](https://github.com/spear-ai/citizen/commit/3649055e97e0dfef30036e14f93f1d9868b5a1f2) Thanks [@psirenny](https://github.com/psirenny)! - Update dependencies.

## 4.1.1

### Patch Changes

- [#97](https://github.com/spear-ai/citizen/pull/97) [`7c74289`](https://github.com/spear-ai/citizen/commit/7c74289a0470c0e3b2bf775a094bccf45b2eb04e) Thanks [@psirenny](https://github.com/psirenny)! - Add missing requirement for GraphQL field descriptions. 🐛

## 4.1.0

### Minor Changes

- [#92](https://github.com/spear-ai/citizen/pull/92) [`fa7eef7`](https://github.com/spear-ai/citizen/commit/fa7eef7a46b5cb5bdf3447fd376b7edfef07e121) Thanks [@psirenny](https://github.com/psirenny)! - Add ESLint Prettier config. 🎉

### Patch Changes

- [#93](https://github.com/spear-ai/citizen/pull/93) [`0183e8c`](https://github.com/spear-ai/citizen/commit/0183e8c98c4b2f502645b4358cdf400716182ad0) Thanks [@psirenny](https://github.com/psirenny)! - Skip `check` step on release.

- [#95](https://github.com/spear-ai/citizen/pull/95) [`074e36c`](https://github.com/spear-ai/citizen/commit/074e36c44d3fe083eed6122dbe60be297feb064a) Thanks [@psirenny](https://github.com/psirenny)! - Always build packages before the Changesets GitHub Action runs.

- [#94](https://github.com/spear-ai/citizen/pull/94) [`0a8078a`](https://github.com/spear-ai/citizen/commit/0a8078aabd069d60ff475debbe8b13677e1c1c25) Thanks [@psirenny](https://github.com/psirenny)! - Prevent Turbo build from ignoring `dist/**` files.

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
