declare module "eslint-plugin-react-hooks" {
  type Plugin = import("eslint").ESLint.Plugin;
  const plugin: Plugin;
  export default plugin;
}
