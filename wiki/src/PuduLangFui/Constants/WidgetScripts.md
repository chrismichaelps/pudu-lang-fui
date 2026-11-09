---
type: module
path: "@root/src/PuduLangFui/Constants/WidgetScripts.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.67
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Constants.WidgetScripts]
---

# PuduLangFui.Constants.WidgetScripts

## Purpose

The optional behavior of interactive parts, one script per part.

## Interface

### Signatures

```pudu
export const SLIDER: Str

export const CAROUSEL: Str

export const COMBOBOX: Str

export const OTP: Str

export const RESIZABLE: Str

export const CALENDAR: Str

export const DATE_PICKER: Str

export const MENU_KEYS: Str

export const DATA_TABLE: Str

export const COMMAND_KEYS: Str
```

### Linkage

- **Requires:** (none)

## Algorithm

1. Each script guards against running twice
2. it listens at the document, so parts added later still work.

## Negative Logic (Prohibited Paths)

- ❌ Do not place caller text into markup.

## Edge Cases

- A script for a part absent from the page does nothing, and only parts on the page bring their script.

## Depth

DEPTH 0.67 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Why one module for these?
  **A:** Each is short and needs no state of its own. _Rationale:_ a reader finds them together. _Rejected:_ one file per script.

## Referenced by

[[src/PuduLangFui/Components/Composites/Calendar]] · [[src/PuduLangFui/Components/Composites/Carousel]] · [[src/PuduLangFui/Components/Composites/Combobox]] · [[src/PuduLangFui/Components/Composites/ContextMenu]] · [[src/PuduLangFui/Components/Composites/DropdownMenu]] · [[src/PuduLangFui/Components/Composites/InputOtp]] · [[src/PuduLangFui/Components/Patterns/Command]] · [[src/PuduLangFui/Components/Patterns/DataTable]] · [[src/PuduLangFui/Components/Patterns/DatePicker]] · [[src/PuduLangFui/Components/Primitives/Resizable]] · [[src/PuduLangFui/Components/Primitives/Slider]] · [[src/PuduLangFui/Constants/_MOC]]
