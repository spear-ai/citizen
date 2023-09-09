---
"@spear-ai/eslint-config": patch
---

Replaced the broken `eslint-comments/no-unused-disable` rule with an ESLint setting that warns on unused disable comments. ESLint will continue to throw an error on unused disable comments when warnings are restricted.
