---
type: module
path: "@root/src/PuduLangFui/Components/Primitives/Tabs.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.63
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Components.Primitives.Tabs]
---

# PuduLangFui.Components.Primitives.Tabs

## Purpose

Panels switched by a row of labelled choices.

## Interface

### Signatures

```pudu
export type Variant = Pill | Line

export type Tab = { value: Str, caption: Str, panel: H.Node }

export fn tab(value: Str, caption: Str, panel: H.Node) -> Tab

export fn tabs(name: Str, selected: Str, items: Array[Tab], variant: Variant) -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. Radios and labels in a row, panels after them
2. generated `:has` rules show the panel at the checked position.

## Negative Logic (Prohibited Paths)

- ❌ Do not claim tab roles the keyboard does not honor.

## Edge Cases

- Twelve panels are supported; more belong in navigation.

## Depth

DEPTH 0.63 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** How are panels matched to radios without per-instance CSS?
  **A:** By position, up to twelve. _Rationale:_ one static stylesheet. _Rejected:_ inline rules per instance.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Primitives/_MOC]]
