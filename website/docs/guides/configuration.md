---
title: Configuration
description: The project's fui.toml.
---

# Configuration

`fui init` writes `fui.toml`. The file is only read by the generator.

```toml
root = "Ui"
source = "src"
preset = "graphite"

[registries]
"@acme" = "deps/@acme/ui"
```

| Key | Meaning |
| --- | --- |
| `root` | The module name your components live under. |
| `source` | Your package's source directory. |
| `preset` | The preset `fui apply` last set. |
| `registries` | Namespaces, each naming a package directory. |
