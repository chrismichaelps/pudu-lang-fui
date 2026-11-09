---
title: Module paths
description: Where added components land.
---

# Module paths

A component keeps its layer when it is added. `button` becomes `src/Ui/Primitives/Button.pudu`, with
the module `Ui.Primitives.Button`. Layers are dependency levels: Primitives import nothing above
them, Composites import Primitives, and Patterns import both.

| Stays in the package | Becomes yours |
| --- | --- |
| `PuduLangFui.Core`, `.Domain`, `.Theme`, `.Constants`, `.Utils` | Components, elements, blocks |

Keeping the core as a dependency is what lets `pudu update` deliver fixes without touching a file
you edited.
