---
type: domain
tags: [domain]
aliases: [Registry]
---

# Registry

- **Definition:** Any Pudu package whose source tree has `Components`, `Elements`, or `Blocks` under
  its module root. Its [[domain/Item|items]] are read from those files; `registry.json` is a built
  index of them.
- **Namespace:** `@acme/button` resolves through `[registries]` in `fui.toml`.

## Referenced by

[[decisions/ADR-0006-source-tree-registry]] · [[domain/_MOC]] · [[subsystems/Distribution]]
