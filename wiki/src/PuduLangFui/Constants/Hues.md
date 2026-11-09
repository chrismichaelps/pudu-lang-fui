---
type: module
path: "@root/src/PuduLangFui/Constants/Hues.pudu"
fidelity: Active
subsystem: "[[subsystems/Styling]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.53
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Constants.Hues]
---

# PuduLangFui.Constants.Hues

## Purpose

The hues of status colors, which never follow the brand.

## Interface

### Signatures

```pudu
export const DESTRUCTIVE: Float64

export const SUCCESS: Float64

export const WARNING: Float64

export const INFO: Float64
```

### Linkage

- **Requires:** (none)

## Algorithm

1. Constants only.

## Negative Logic (Prohibited Paths)

- ❌ Do not derive these.

## Edge Cases

- None.

## Depth

DEPTH 0.53 (MEDIUM). Part of [[subsystems/Styling]], under [[grammar/pudu]].

## Grill Log

- **Q:** Tunable?
  **A:** By replacing the palette. _Rationale:_ red must stay red. _Rejected:_ brand-shifted status.

## Referenced by

[[src/PuduLangFui/Constants/_MOC]] · [[src/PuduLangFui/Theme/Aspects/Palette]]
