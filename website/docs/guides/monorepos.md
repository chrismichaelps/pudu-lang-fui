---
title: Monorepos
description: One design system, several packages.
---

# Monorepos

Run the generator with `--cwd` for each package, or keep the design system in one package and point
the others at it as a registry:

```toml
[registries]
"@design" = "../design"
```

```bash
./fui add @design/button --cwd apps/web
```
