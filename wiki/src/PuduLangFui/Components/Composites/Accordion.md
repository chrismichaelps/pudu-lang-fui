---
type: module
path: "@root/src/PuduLangFui/Components/Composites/Accordion.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.63
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Components.Composites.Accordion]
---

# PuduLangFui.Components.Composites.Accordion

## Purpose

Sections of which at most one is open.

## Interface

### Signatures

```pudu
export fn accordion() -> H.Node

export fn item(group: Str, heading: Str, open: Bool = false) -> H.Node

export fn content() -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Components/Primitives/Icon]] · [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. `details` elements sharing a `name`, which the browser keeps exclusive.

## Negative Logic (Prohibited Paths)

- ❌ Do not implement exclusivity.

## Edge Cases

- A `Multiple` accordion omits the name.

## Depth

DEPTH 0.63 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** How is single mode enforced?
  **A:** By the shared `name`. _Rationale:_ it is what the attribute means. _Rejected:_ a script.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Composites/_MOC]]
