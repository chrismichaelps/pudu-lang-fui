---
type: module
path: "@root/src/PuduLangFui/Constants/Accessibility.pudu"
fidelity: Active
subsystem: "[[subsystems/Styling]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.56
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Constants.Accessibility]
---

# PuduLangFui.Constants.Accessibility

## Purpose

The contrast thresholds the audit enforces.

## Interface

### Signatures

```pudu
export const TEXT_RATIO: Float64

export const BOUNDARY_RATIO: Float64
```

### Linkage

- **Requires:** (none)

## Algorithm

1. Constants only.

## Negative Logic (Prohibited Paths)

- ❌ Do not lower these for a preset.

## Edge Cases

- None.

## Depth

DEPTH 0.56 (MEDIUM). Part of [[subsystems/Styling]], under [[grammar/pudu]].

## Grill Log

- **Q:** Which standard?
  **A:** WCAG AA: 4.5 for text and 3 for control boundaries. _Rationale:_ the common legal and practical floor. _Rejected:_ AAA, which most brand colors cannot reach.

## Referenced by

[[src/PuduLangFui/Constants/_MOC]] · [[src/PuduLangFui/Theme/Audit/Contrast]]
