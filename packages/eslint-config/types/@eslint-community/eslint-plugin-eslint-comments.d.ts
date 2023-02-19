declare module "@eslint-community/eslint-plugin-eslint-comments" {
  type Plugin = import("eslint").ESLint.Plugin;
  const plugin: Plugin;
  export default plugin;
}
