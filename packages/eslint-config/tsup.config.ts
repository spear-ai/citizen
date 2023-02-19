/* eslint-disable import/no-extraneous-dependencies */

import { defineConfig } from "tsup";

const tsupConfig = defineConfig({
  clean: true,
  dts: true,
  footer: {
    js: "module.exports = module.exports.default;",
  },
  format: ["cjs", "esm"],
});

export default tsupConfig;
