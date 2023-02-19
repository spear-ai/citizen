/* eslint-disable import/no-extraneous-dependencies */

import { defineConfig } from "tsup";

const tsupConfig = defineConfig({
  clean: true,
  footer: {
    js: "module.exports = module.exports.default;",
  },
});

export default tsupConfig;
