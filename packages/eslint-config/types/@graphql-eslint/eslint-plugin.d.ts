declare module "@graphql-eslint/eslint-plugin" {
  type Plugin = import("eslint").ESLint.Plugin;
  const plugin: Plugin;
  export default plugin;
}
