declare module "eslint-config-airbnb-typescript/lib/shared" {
  type Config = import("eslint").Linter.Config;
  const config: Config;
  export default config;
}
