---
type: module
path: "@root/src/PuduLangFui/Constants/ToastScript.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.67
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Constants.ToastScript]
---

# PuduLangFui.Constants.ToastScript

## Purpose

The behavior of a toast region, as lines of script.

## Interface

### Signatures

```pudu
export const LINES: Array[Str]
```

### Linkage

- **Requires:** (none)

## Algorithm

1. Lay toasts out from their measured heights
2. run close timers that pause while the region is expanded, interacted with, or the document is hidden
3. swipe with axis lock, dampening against disallowed directions, and distance or velocity dismissal
4. expose the programmatic interface.

## Negative Logic (Prohibited Paths)

- ❌ Do not place caller text in markup
- ❌ only `custom` takes markup, by name.

## Edge Cases

- A toast with an unknown id updates nothing and creates a new one.

## Depth

DEPTH 0.67 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Why lines in a constant rather than one string?
  **A:** A contributor can read and diff them. _Rationale:_ it is code. _Rejected:_ a minified literal.

## Referenced by

[[src/PuduLangFui/Components/Composites/Toast]] · [[src/PuduLangFui/Constants/_MOC]]
