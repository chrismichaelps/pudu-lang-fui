---
type: module
path: "@root/src/PuduLangFui/Constants/SidebarScript.pudu"
fidelity: Active
subsystem: "[[subsystems/Styling]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.65
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Constants.SidebarScript]
---

# PuduLangFui.Constants.SidebarScript

## Purpose

The keyboard shortcut, escape-to-close, and remembered state of a sidebar.

## Interface

### Signatures

```pudu
export const LINES: Array[Str]
```

### Linkage

- **Requires:** (none)

## Algorithm

1. Toggles the state control on the shortcut, closes on escape at phone width, stores the desktop state in a cookie for seven days, and restores it on load.

## Negative Logic (Prohibited Paths)

- ❌ Without the script the sidebar still opens and closes through its controls.

## Edge Cases

- The phone drawer is never remembered; it always starts closed.

## Depth

DEPTH 0.65 (MEDIUM). Part of [[subsystems/Styling]], under [[grammar/pudu]].

## Grill Log

- **Q:** Why a script at all?
  **A:** The shortcut and the persistence cannot be declared. _Rationale:_ the open and close paths stay declarative. _Rejected:_ scripting the whole sidebar.

## Referenced by

[[src/PuduLangFui/Components/Patterns/Sidebar]] · [[src/PuduLangFui/Constants/_MOC]]
