---
"@spear-ai/eslint-config": major
---

Remove default export from the ESLint Config. Use a named import instead:

```js
import { eslintConfig } from "@spear-ai/eslint-config";

export default eslintConfig;
```
