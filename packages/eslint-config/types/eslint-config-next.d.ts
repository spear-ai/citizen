declare module "eslint-config-next" {
  type Config = import("eslint").Linter.Config;
  const config: Config;
  export default config;
}
