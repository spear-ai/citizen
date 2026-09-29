import { replaceInFile } from "replace-in-file";
import package_ from "./package.json" with { type: "json" };

await replaceInFile({
  files: "pyproject.toml",
  from: /version = ".*"/u,
  to: `version = "${package_.version}"`,
});
