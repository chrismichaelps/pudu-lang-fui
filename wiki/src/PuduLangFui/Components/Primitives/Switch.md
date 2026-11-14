---
type: module
path: "@root/src/PuduLangFui/Components/Primitives/Switch.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.64
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Components.Primitives.Switch]
---

# PuduLangFui.Components.Primitives.Switch

## Purpose

An on and off control.

## Interface

### Signatures

```pudu
export fn switcherTree(name: Str, on: Bool = false, disabled: Bool = false) -> Tree.Tree

export fn switcher(name: Str, on: Bool = false, disabled: Bool = false) -> H.Node

export fn style() -> Css.Block
```

### Tree forms

`switcherTree` answers `Tree.Tree` with the role Switch and the part `switch`. The flags `checked` and
`disabled` are set only when the switch is on or disabled. `switcher` is its web view:
`switcher(name, on, disabled) = Tree.web(&switcherTree(name, on, disabled))`.

### Linkage

- **Requires:** [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Core/Tree]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. A checkbox with `role=switch`, the thumb a pseudo-element moved with `translate` through a logical sign.

## Negative Logic (Prohibited Paths)

- ❌ Do not use physical offsets.

## Edge Cases

- The thumb direction follows `dir` through a `:dir(rtl)` rule.

## Depth

DEPTH 0.64 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Separate element?
  **A:** The same checkbox with a role. _Rationale:_ submits as a checkbox. _Rejected:_ a button toggling hidden state.

## Referenced by

[[src/PuduLangFui/Blocks/Settings]] · [[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Primitives/_MOC]]
