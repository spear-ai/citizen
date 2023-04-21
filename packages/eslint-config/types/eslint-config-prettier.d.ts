declare module "eslint-config-prettier" {
  type Config = import("eslint").Linter.Config;
  const config: Config;
  export default config;
}
