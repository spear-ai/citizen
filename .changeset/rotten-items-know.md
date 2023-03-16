---
"@spear-ai/eslint-config": major
---

Remove default export from the ESLint Config. Use a named import instead:

```js
export { eslintConfig as default } from "@spear-ai/eslint-config";
```
