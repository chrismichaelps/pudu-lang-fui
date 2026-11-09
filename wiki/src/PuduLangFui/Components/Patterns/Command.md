---
type: module
path: "@root/src/PuduLangFui/Components/Patterns/Command.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.6
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Components.Patterns.Command]
---

# PuduLangFui.Components.Patterns.Command

## Purpose

A search-and-run menu.

## Interface

### Signatures

```pudu
export fn matching(items: &Array[Str], query: Str) -> Array[Str]

export fn command() -> H.Node

export fn input(name: Str, hint: Str) -> H.Node

export fn list() -> H.Node

export fn group(heading: Str) -> H.Node

export fn item() -> H.Node

export fn of(element: H.Node) -> H.Node

export fn empty(message: Str) -> H.Node

export fn shortcut() -> H.Node

export fn separator() -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Components/Primitives/Icon]] · [[src/PuduLangFui/Constants/WidgetScripts]] · [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. An input over grouped items
2. a behavior filters by text. Without a script every item is listed.

## Negative Logic (Prohibited Paths)

- ❌ Do not require the behavior for reaching items.

## Edge Cases

- Empty text is shown when nothing matches.

## Depth

DEPTH 0.6 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Filter on the server?
  **A:** Offer `matching` as a pure function for a form, and the behavior for instant filtering. _Rationale:_ both are needed. _Rejected:_ only one.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Patterns/_MOC]]
