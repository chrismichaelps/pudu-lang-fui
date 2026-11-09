---
type: module
path: "@root/src/PuduLangFui/Components/Composites/ToggleGroup.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.62
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Components.Composites.ToggleGroup]
---

# PuduLangFui.Components.Composites.ToggleGroup

## Purpose

A set of toggles allowing one or many.

## Interface

### Signatures

```pudu
export type Kind = One | Many

export type Variant = Plain | Outline

export fn group(caption: Str) -> H.Node

export fn styled(caption: Str, variant: Variant) -> H.Node

export fn item(kind: Kind, name: Str, value: Str, pressed: Bool = false) -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. Native inputs drive pressed toggles, plain or outlined.

## Negative Logic (Prohibited Paths)

- ❌ Do not branch on the kind.

## Edge Cases

- Radios keep one pressed.

## Depth

DEPTH 0.62 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Reuse Toggle's element?
  **A:** Yes, the same label-and-input shape. _Rationale:_ one idea. _Rejected:_ a separate state mechanism.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Composites/_MOC]]
