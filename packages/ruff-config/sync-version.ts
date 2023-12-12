/* eslint-disable regexp/require-unicode-sets-regexp */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable regexp/require-unicode-regexp */

import replaceInFile from "replace-in-file";
import package_ from "./package.json" assert { type: "json" };

await replaceInFile({
  files: "pyproject.toml",
  from: /version = "0\.0\.0"/,
  to: `version = "${package_.version}"`,
});
