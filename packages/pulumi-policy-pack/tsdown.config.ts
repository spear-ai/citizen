import { defineConfig } from "tsdown";

export default defineConfig({
  dts: true,
  entry: ["src/*.ts"],
  fixedExtension: false,
  format: ["cjs", "esm"],
});
