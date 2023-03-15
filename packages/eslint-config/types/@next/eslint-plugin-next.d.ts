declare module "@next/eslint-plugin-next" {
  type Plugin = import("eslint").ESLint.Plugin;
  const plugin: Plugin;
  export default plugin;
}
