declare module "eslint-plugin-markdown" {
  type Plugin = import("eslint").ESLint.Plugin;
  const plugin: Plugin;
  export default plugin;
}

declare module "eslint-plugin-markdown/lib/processor" {
  type Processor = import("eslint").Linter.Processor;
  const processor: Processor;
  export default processor;
}
