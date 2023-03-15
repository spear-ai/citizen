declare module "eslint-plugin-react" {
  type Plugin = import("eslint").ESLint.Plugin;
  const plugin: Plugin;
  export default plugin;
}
