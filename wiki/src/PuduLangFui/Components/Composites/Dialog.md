---
type: module
path: "@root/src/PuduLangFui/Components/Composites/Dialog.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.59
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Components.Composites.Dialog]
---

# PuduLangFui.Components.Composites.Dialog

## Purpose

A modal window.

## Interface

### Signatures

```pudu
export fn trigger(id: Str, given: Button.Props) -> H.Node

export fn close(id: Str, given: Button.Props) -> H.Node

export fn dialog(id: Str, name: Str) -> H.Node

export fn header() -> H.Node

export fn title() -> H.Node

export fn description() -> H.Node

export fn footer() -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Components/Primitives/Button]] · [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. `dialog` with `closedby=any`
2. triggers are invoker commands, so opening needs no script
3. focus trapping and Escape come from the platform.

## Negative Logic (Prohibited Paths)

- ❌ Do not trap focus by hand.

## Edge Cases

- Without invoker support a trigger does nothing, so pages needing old browsers link to a route instead.

## Depth

DEPTH 0.59 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Name required?
  **A:** Yes, as a parameter. _Rationale:_ an unnamed dialog is announced as nothing. _Rejected:_ optional label.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Composites/_MOC]]
