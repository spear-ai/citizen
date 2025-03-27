/* eslint-disable import-x/no-default-export */

import type { Config } from "prettier";

const prettierConfig: Config = {
  plugins: ["prettier-plugin-tailwindcss"],
  printWidth: 109,
  tailwindFunctions: ["cx"],
};

export default prettierConfig;
