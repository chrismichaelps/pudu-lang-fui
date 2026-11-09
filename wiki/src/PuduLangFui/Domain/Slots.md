---
type: module
path: "@root/src/PuduLangFui/Domain/Slots.pudu"
fidelity: Active
subsystem: "[[subsystems/Styling]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.65
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Domain.Slots]
---

# PuduLangFui.Domain.Slots

## Purpose

Finds every slot name in a rendered tree.

## Interface

### Signatures

```pudu
export fn used(view: &Html.Html) -> Set[Str]
```

### Linkage

- **Requires:** [[src/PuduLangFui/Constants/Css]]

## Algorithm

1. Walk the tree with an explicit stack, collecting the value of each `data-slot` attribute into a set.

## Negative Logic (Prohibited Paths)

- ❌ Do not recurse
- ❌ document depth comes from data.

## Edge Cases

- Trusted markup is opaque and contributes nothing.

## Depth

DEPTH 0.65 (MEDIUM). Part of [[subsystems/Styling]], under [[grammar/pudu]].

## Grill Log

- **Q:** Parse rendered text or walk the tree?
  **A:** Walk the tree. _Rationale:_ the tree is typed and already built. _Rejected:_ scanning the rendered string for `data-slot=`, which user text could imitate.

## Referenced by

[[src/PuduLangFui]] · [[src/PuduLangFui/Domain/_MOC]]
