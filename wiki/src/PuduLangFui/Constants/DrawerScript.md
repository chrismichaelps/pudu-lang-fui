---
type: module
path: "@root/src/PuduLangFui/Constants/DrawerScript.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.67
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Constants.DrawerScript]
---

# PuduLangFui.Constants.DrawerScript

## Purpose

The behavior of a drawer, as lines of script.

## Interface

### Signatures

```pudu
export const LINES: Array[Str]
```

### Linkage

- **Requires:** (none)

## Algorithm

1. Track a press on the panel
2. lock to the drawer's axis
3. refuse when an inner scroller has content to scroll
4. translate the panel while fading the overlay and scaling the background
5. on release, close by velocity or threshold, or settle on the nearest stop.

## Negative Logic (Prohibited Paths)

- ❌ Do not drag from controls.
- ❌ Do not start a drag just after an inner scroll.

## Edge Cases

- A drawer dragged past its limit is dampened logarithmically.

## Depth

DEPTH 0.67 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Scrolling or pointer tracking?
  **A:** Pointer tracking. _Rationale:_ close threshold, velocity, and snap sequencing need the numbers a scroll position cannot give. _Rejected:_ scroll snapping, which left those behaviours to the browser.

## Referenced by

[[src/PuduLangFui/Components/Composites/Drawer]] · [[src/PuduLangFui/Constants/_MOC]]
