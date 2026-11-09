---
type: module
path: "@root/src/PuduLangFui/Components/Primitives/Toggle.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.61
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Components.Primitives.Toggle]
---

# PuduLangFui.Components.Primitives.Toggle

## Purpose

A two-state button.

## Interface

### Signatures

```pudu
export type Variant = Plain | Outline

export type Size = Small | Medium | Large

export fn sized(toggled: H.Node, size: Size) -> H.Node

export fn toggle(name: Str, value: Str, pressed: Bool = false, variant: Variant) -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. A label around a hidden checkbox
2. `:has(:checked)` paints the pressed state.

## Negative Logic (Prohibited Paths)

- ❌ Do not depend on a script for state.

## Edge Cases

- The hidden input stays focusable and draws the ring on the label.

## Depth

DEPTH 0.61 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Why a checkbox?
  **A:** It submits and holds state natively. _Rationale:_ no client state. _Rejected:_ `aria-pressed` toggled by script.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Primitives/_MOC]]
