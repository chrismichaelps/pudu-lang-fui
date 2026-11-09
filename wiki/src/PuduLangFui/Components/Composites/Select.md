---
type: module
path: "@root/src/PuduLangFui/Components/Composites/Select.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.62
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Components.Composites.Select]
---

# PuduLangFui.Components.Composites.Select

## Purpose

A select with a themed popup.

## Interface

### Signatures

```pudu
export fn select(name: Str, disabled: Bool = false) -> H.Node

export fn option(value: Str, caption: Str, selected: Bool = false) -> H.Node

export fn placeholder(caption: Str) -> H.Node

export fn group(heading: Str) -> H.Node

export fn separator() -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Components/Primitives/Icon]] · [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. A `select` using `appearance: base-select` with `selectedcontent`
2. browsers without it show the native popup, still themed.

## Negative Logic (Prohibited Paths)

- ❌ Do not rebuild listbox semantics.

## Edge Cases

- Option content may hold icons.

## Depth

DEPTH 0.62 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Custom listbox?
  **A:** No. _Rationale:_ the platform now styles it. _Rejected:_ a role-based popup with scripted focus.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Composites/_MOC]]
