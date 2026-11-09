---
type: module
path: "@root/src/PuduLangFui/Elements/Confirmation.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.63
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Elements.Confirmation]
---

# PuduLangFui.Elements.Confirmation

## Purpose

Asks for approval before a tool runs.

## Interface

### Signatures

```pudu
export fn confirmation(title: Str, detail: Str, action: Str) -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Components/Primitives/Button]] · [[src/PuduLangFui/Components/Primitives/Card]] · [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. A card with the request and approve and deny submit buttons in one form.

## Negative Logic (Prohibited Paths)

- ❌ Do not approve by default.

## Edge Cases

- The decision is the submitted button's value.

## Depth

DEPTH 0.63 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Default focus?
  **A:** None. _Rationale:_ approval must be deliberate. _Rejected:_ autofocus on approve.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Elements/_MOC]]
