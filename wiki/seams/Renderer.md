---
type: seam
capacity: INTERNAL
lifecycle: INTERNAL
drift_score: 0
drift_status: HEALTHY
production_adapters: 1
tags: [seam]
---

# Renderer (seam)

## Classification

INTERNAL by design: every component answers `Std.Html.Build`'s node directly. No wrapper type stands
between a component and the standard library, so a project's own markup composes with no adapter.

## Referenced by

[[seams/_MOC]]
