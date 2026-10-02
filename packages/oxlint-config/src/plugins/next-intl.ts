import type { ESTree, Reference } from "@oxlint/plugins";
import { definePlugin, defineRule, eslintCompatPlugin } from "@oxlint/plugins";

const translatorMethodSet = new Set(["has", "markup", "rich"]);
const expectedVariableNameByFunction = new Map([
  ["getExtracted", "t"],
  ["getFormatter", "format"],
  ["getLocale", "locale"],
  ["useExtracted", "t"],
  ["useFormatter", "format"],
  ["useLocale", "locale"],
]);

type Convention = { functionName: string; variableName: string };
const conventionOf = (declarator: ESTree.VariableDeclarator): Convention | null => {
  const init = declarator.init?.type === "AwaitExpression" ? declarator.init.argument : declarator.init;
  if (init?.type !== "CallExpression" || init.callee.type !== "Identifier") {
    return null;
  }

  const variableName = expectedVariableNameByFunction.get(init.callee.name);
  return variableName === undefined ? null : { functionName: init.callee.name, variableName };
};

const translatorCallOf = (identifier: Reference["identifier"]): ESTree.CallExpression | null => {
  const { parent } = identifier;
  if (parent.type === "CallExpression" && parent.callee === identifier) {
    return parent;
  }

  const isTranslatorMethod =
    parent.type === "MemberExpression" &&
    parent.object === identifier &&
    parent.property.type === "Identifier" &&
    translatorMethodSet.has(parent.property.name);
  if (!isTranslatorMethod) {
    return null;
  }

  const grandparent = parent.parent;
  return grandparent.type === "CallExpression" && grandparent.callee === parent ? grandparent : null;
};

const isHookDependencyEntry = (identifier: Reference["identifier"]): boolean => {
  const { parent } = identifier;
  if (parent.type !== "ArrayExpression") {
    return false;
  }

  const call = parent.parent;
  if (call.type !== "CallExpression" || !call.arguments.includes(parent)) {
    return false;
  }

  const { callee } = call;
  const calleeName =
    callee.type === "Identifier"
      ? callee.name
      : callee.type === "MemberExpression" && callee.property.type === "Identifier"
        ? callee.property.name
        : null;
  return calleeName != null && /^use[A-Z]/u.test(calleeName);
};

const isLiteralMessage = (argument: ESTree.CallExpression["arguments"][number] | undefined): boolean =>
  (argument?.type === "Literal" && typeof argument.value === "string") ||
  (argument?.type === "TemplateLiteral" && argument.expressions.length === 0);

const bindingName = defineRule({
  createOnce: (context) => ({
    VariableDeclarator: (node) => {
      const convention = conventionOf(node);
      if (
        convention == null ||
        (node.id.type === "Identifier" && node.id.name === convention.variableName)
      ) {
        return;
      }

      context.report({ data: { ...convention }, messageId: "bindingName", node: node.id });
    },
  }),
  meta: {
    messages: {
      bindingName:
        "Bind the result of `{{functionName}}()` to `{{variableName}}` so the convention is greppable and the extractor can follow it.",
    },
    schema: [],
    type: "suggestion",
  },
});

const translatorUsage = defineRule({
  createOnce: (context) => ({
    VariableDeclarator: (node) => {
      if (conventionOf(node)?.variableName !== "t" || node.id.type !== "Identifier") {
        return;
      }

      for (const variable of context.sourceCode.getDeclaredVariables(node)) {
        for (const reference of variable.references) {
          const { identifier } = reference;
          if (identifier === node.id) {
            continue;
          }

          if (isHookDependencyEntry(identifier)) {
            continue;
          }

          const call = translatorCallOf(identifier);
          if (call == null) {
            context.report({ messageId: "escape", node: identifier });
            continue;
          }

          const message = call.arguments.at(0);
          if (!isLiteralMessage(message)) {
            context.report({ messageId: "literalMessage", node: message ?? call });
          }
        }
      }
    },
  }),
  meta: {
    messages: {
      escape:
        "`t` must be called where it was created; pass the translated string instead. A helper that needs messages becomes a hook (or an async server function) that calls useExtracted/getExtracted itself.",
      literalMessage:
        "The message passed to `t` must be a string literal so the extractor can find it. Map dynamic values to literals with a switch or record.",
    },
    schema: [],
    type: "problem",
  },
});

// eslint-disable-next-line import/no-default-export
export default eslintCompatPlugin(
  definePlugin({
    meta: { name: "next-intl" },
    rules: {
      "binding-name": bindingName,
      "translator-usage": translatorUsage,
    },
  }),
);
