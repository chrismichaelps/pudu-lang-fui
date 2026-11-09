---
type: module
path: "@root/src/PuduLangFui/Constants/LookBase.pudu"
fidelity: Active
subsystem: "[[subsystems/Styling]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.56
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Constants.LookBase]
---

# PuduLangFui.Constants.LookBase

## Purpose

What every look relies on: initial values of composed variables, the default border color, and the animations.

## Interface

### Signatures

```pudu
export const INITIAL: Str

export const FRAMES: Str
```

### Linkage

- **Requires:** (none)

## Algorithm

1. Constants only.

## Negative Logic (Prohibited Paths)

- ❌ Holds no component appearance.

## Edge Cases

- Initial values apply to pseudo-elements and backdrops too.

## Depth

DEPTH 0.56 (MEDIUM). Part of [[subsystems/Styling]], under [[grammar/pudu]].

## Grill Log

- **Q:** Why shared?
  **A:** Each look composes the same variables. _Rationale:_ one definition. _Rejected:_ repeating them per look.

## Referenced by

[[src/PuduLangFui]] · [[src/PuduLangFui/Constants/_MOC]]
