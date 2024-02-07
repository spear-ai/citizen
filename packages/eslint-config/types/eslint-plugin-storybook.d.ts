declare module "eslint-plugin-storybook" {
  type Plugin = import("eslint").ESLint.Plugin;
  const plugin: Plugin;
  export default plugin;
}
