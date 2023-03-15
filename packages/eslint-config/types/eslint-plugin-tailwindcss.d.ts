declare module "eslint-plugin-tailwindcss" {
  type Plugin = import("eslint").ESLint.Plugin;
  const plugin: Plugin;
  export default plugin;
}
