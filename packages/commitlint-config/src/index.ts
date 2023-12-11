/* eslint-disable import/no-default-export */

import type { UserConfig } from "@commitlint/types";

const commitlintConfig: UserConfig = {
  rules: {
    "body-case": [2, "always", ["sentence-case"]],
    "body-leading-blank": [2, "always"],
    "body-max-line-length": [2, "always", 120],
    "footer-leading-blank": [2, "always"],
    "footer-max-line-length": [2, "always", 120],
    "header-case": [2, "always", ["sentence-case"]],
    "header-full-stop": [2, "never", "."],
    "header-max-length": [2, "always", 120],
    "scope-empty": [2, "always"],
    "subject-empty": [2, "always"],
    "type-empty": [2, "always"],
  },
};

export default commitlintConfig;
