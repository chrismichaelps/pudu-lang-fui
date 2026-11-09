---
type: module
path: "@root/src/PuduLangFui/Constants/Css.pudu"
fidelity: Active
subsystem: "[[subsystems/Styling]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.52
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Constants.Css]
---

# PuduLangFui.Constants.Css

## Purpose

The fixed names the styling layer writes: the token prefix, the cascade layers, and the base layer's rules.

## Interface

### Signatures

```pudu
export const TOKEN_PREFIX: Str

export const SLOT_ATTRIBUTE: Str

export const LAYER_ORDER: Str

export const COMPONENT_LAYER: Str

export const BASE_LAYER: Str

export const FOCUS_RING: Str
```

### Linkage

- **Requires:** (none)

## Algorithm

1. Constants only.

## Negative Logic (Prohibited Paths)

- ❌ Do not put a component's styles here.

## Edge Cases

- None.

## Depth

DEPTH 0.52 (MEDIUM). Part of [[subsystems/Styling]], under [[grammar/pudu]].

## Grill Log

- **Q:** Why is the base layer so small?
  **A:** It sets only box sizing, page color, and reduced motion. _Rationale:_ a component system must not restyle a project's own markup. _Rejected:_ a full reset.

## Referenced by

[[src/PuduLangFui]] · [[src/PuduLangFui/Constants/_MOC]] · [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]] · [[src/PuduLangFui/Domain/Slots]] · [[src/PuduLangFui/Theme/Build/Theme]]
