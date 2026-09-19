/* eslint-disable no-console */

import { spawnSync } from "node:child_process";
import { getPackages } from "@manypkg/get-packages";

const getIsReleased = (name: string, version: string) => {
  const { status } = spawnSync("git", ["rev-parse", "--quiet", "--verify", `refs/tags/${name}@${version}`], {
    stdio: "ignore",
  });

  return status === 0;
};

const { packages } = await getPackages(process.cwd());

const publishablePackageList = packages.filter(({ packageJson }) => {
  const { private: isPrivate, scripts } = packageJson as typeof packageJson & {
    scripts?: Record<string, string>;
  };

  return isPrivate === true && scripts?.["publish-package"] !== undefined;
});

for (const { dir: directory, packageJson } of publishablePackageList) {
  const { name, version } = packageJson;

  if (getIsReleased(name, version)) {
    console.log(`Skipping ${name}@${version} — Changesets has already released it.`);
    continue;
  }

  console.log(`Publishing ${name}@${version}…`);

  const { status } = spawnSync("yarn", ["run", "publish-package"], {
    cwd: directory,
    stdio: "inherit",
  });

  if (status !== 0) {
    process.exitCode = status ?? 1;
    break;
  }
}
