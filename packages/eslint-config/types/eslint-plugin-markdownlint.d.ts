declare module "eslint-plugin-markdownlint" {
  type Plugin = import("eslint").ESLint.Plugin;
  const plugin: Plugin;
  export default plugin;
}

declare module "eslint-plugin-markdownlint/parser" {
  type Parser = import("eslint").Linter.ParserModule;
  const parser: Parser;
  export default parser;
}
