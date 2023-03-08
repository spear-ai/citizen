/* eslint-disable import/no-extraneous-dependencies */

import { defineConfig } from "tsup";

const tsupConfig = defineConfig({
  footer: {
    js: "module.exports = module.exports.default;",
  },
});

export default tsupConfig;
