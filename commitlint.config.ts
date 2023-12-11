import type { UserConfig } from "@commitlint/types";

const commitlintConfig: UserConfig = {
  extends: ["./packages/commitlint-config/dist/index.cjs"],
};

export default commitlintConfig;
