---
"@spear-ai/ruff-config": major
---

Disabled Ruff rule `SIM118` because it’s incompatible with rule `PLC0206` that requires `.keys()` to be used when iterating over dictionary keys.
