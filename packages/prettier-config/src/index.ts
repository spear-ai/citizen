/* eslint-disable import-x/no-default-export */

import type { Config } from "prettier";

const prettierConfig: Config = {
  plugins: ["@softonus/prettier-plugin-whitespace-remover"],
  printWidth: 109,
};

export default prettierConfig;
