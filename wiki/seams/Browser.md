---
type: seam
capacity: CRITICAL
capacity_score: 7
lifecycle: CRITICAL
drift_score: 0
drift_status: HEALTHY
production_adapters: 1
tags: [seam, critical]
---

# Browser (seam)

## Classification

CRITICAL. Interaction relies on platform features: `dialog`, `popover`, invoker commands, `details`
with `name`, anchor positioning, `light-dark()`, and cascade layers. Where one is missing, content
stays reachable. See [[decisions/ADR-0003-platform-interaction]].

## Referenced by

[[seams/_MOC]]
