import { defineConfig } from "tsdown";

export default defineConfig({
  dts: true,
  entry: ["src/index.ts", "src/plugins/next-intl.ts"],
  fixedExtension: false,
  format: ["esm"],
  target: "node20",
});
