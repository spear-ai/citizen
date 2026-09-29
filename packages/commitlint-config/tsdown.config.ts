import { defineConfig } from "tsdown";

export default defineConfig({
  dts: true,
  entry: ["src/**/*.ts", "!src/**/*.test.ts"],
  fixedExtension: false,
  format: ["cjs", "esm"],
});
