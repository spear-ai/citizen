/* eslint-disable import/no-default-export */

import type { UserConfig } from "@commitlint/types";

/**
 * Checks if a commit message should be ignored due to being from dependabot.
 * @param message - The commit message to check.
 * @returns True if the commit message should be ignored, false otherwise.
 */
const ignoreDependabot = (message: string): boolean => message.includes("Signed-off-by: dependabot[bot]");

const commitlintConfig: UserConfig = {
  ignores: [ignoreDependabot],
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
