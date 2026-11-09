---
type: module
path: "@root/src/PuduLangFui/Components/Primitives/Avatar.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.77
depth_status: DEEP
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, deep]
aliases: [PuduLangFui.Components.Primitives.Avatar]
---

# PuduLangFui.Components.Primitives.Avatar

## Purpose

A person's image with initials behind it.

## Interface

### Signatures

```pudu
export type Size = Small | Medium | Large

export fn avatar(source: Str, description: Str, letters: Str, size: Size) -> H.Node

export fn initials(text: Str, description: Str, size: Size) -> H.Node

export fn group() -> H.Node

export fn badge() -> H.Node

export fn count(text: Str) -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. The fallback sits under the image, so a failed image shows initials with no script.

## Negative Logic (Prohibited Paths)

- ❌ Do not require a script to detect load failure.

## Edge Cases

- A broken image renders transparent over the initials.

## Depth

DEPTH 0.77 (DEEP). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** How do we fall back?
  **A:** Stack the image above the initials. _Rationale:_ layout does it. _Rejected:_ an `onerror` handler.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Composites/Message]] · [[src/PuduLangFui/Components/Primitives/_MOC]]
