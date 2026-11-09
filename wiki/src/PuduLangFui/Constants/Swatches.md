---
type: module
path: "@root/src/PuduLangFui/Constants/Swatches.pudu"
fidelity: Active
subsystem: "[[subsystems/Styling]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.66
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Constants.Swatches]
---

# PuduLangFui.Constants.Swatches

## Purpose

The palettes a design can start from, each token with its light and dark value.

## Interface

### Signatures

```pudu
export const SWATCHES: Map[Str, Array[(Str, Str, Str)]]
```

### Linkage

- **Requires:** (none)

## Algorithm

1. Data only, keyed by palette name.

## Negative Logic (Prohibited Paths)

- ❌ Do not edit by hand
- ❌ regenerate the table.

## Edge Cases

- A color palette defines only the tokens it changes; a neutral palette defines all of them.

## Depth

DEPTH 0.66 (MEDIUM). Part of [[subsystems/Styling]], under [[grammar/pudu]].

## Grill Log

- **Q:** Why store both modes?
  **A:** A token pairs them through the platform's light-dark function. _Rationale:_ no separate dark sheet. _Rejected:_ deriving dark values.

## Referenced by

[[src/PuduLangFui/Constants/_MOC]] · [[src/PuduLangFui/Theme/Presets/Design]]
