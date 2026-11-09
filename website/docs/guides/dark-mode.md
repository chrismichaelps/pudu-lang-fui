---
title: Dark mode
description: Follows the visitor, with no script and no flash.
---

# Dark mode

Colors are written once with `light-dark()`, so the page follows the visitor's setting with nothing to
load. To force a mode, usually from a preference the server read:

```pudu
Fui.page("Home", Theme.theme(), Catalog.blocks()).mode("dark")
```
