/* eslint-disable import-x/no-extraneous-dependencies */
/* eslint-disable regexp/require-unicode-regexp */
/* eslint-disable regexp/require-unicode-sets-regexp */

import replaceInFile from "replace-in-file";
import package_ from "./package.json" assert { type: "json" };

await replaceInFile({
  files: "pyproject.toml",
  from: /version = ".*"/,
  to: `version = "${package_.version}"`,
});
