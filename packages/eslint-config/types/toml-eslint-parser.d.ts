declare module "toml-eslint-parser" {
  type ParserModule = import("eslint").Linter.ParserModule;
  const parser: ParserModule;
  export default parser;
}
