---
type: module
path: "@root/src/PuduLangFui/Constants/Cli.pudu"
fidelity: Active
subsystem: "[[subsystems/Distribution]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.51
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Constants.Cli]
---

# PuduLangFui.Constants.Cli

## Purpose

Every fixed name and message the generator uses.

## Interface

### Signatures

```pudu
export const CONFIG_FILE: Str

export const MANIFEST_FILE: Str

export const DEFAULT_REGISTRY: Str

export const PACKAGE_ROOT: Str

export const DEFAULT_ROOT: Str

export const DEFAULT_SOURCE: Str

export const DEFAULT_PRESET: Str

export const DEFAULT_INDEX: Str

export const DEFAULT_LIMIT: Int

export const THEME_MODULE: Str

export const CATALOG_MODULE: Str

export const PRESET_LINE: Str

export const ITEM_FOLDERS: Array[Str]

export const NO_MANIFEST: Str

export const ALREADY_SET_UP: Str

export const NOT_SET_UP: Str

export const NOTHING_NAMED: Str

export const USAGE_HEADER: Str

export const ICON_SERVICE: Str

export const DEFAULT_ICON_SIZE: Int

export const ICONS_MODULE: Str

export const ICON_ARCHIVE: Str

export const LIBRARY_BYTES: Int

export const LIBRARY_DEADLINE: Int
```

### Linkage

- **Requires:** (none)

## Algorithm

1. Constants only.

## Negative Logic (Prohibited Paths)

- ❌ Do not write a file name inside a command.

## Edge Cases

- None.

## Depth

DEPTH 0.51 (MEDIUM). Part of [[subsystems/Distribution]], under [[grammar/pudu]].

## Grill Log

- **Q:** Messages beside their commands?
  **A:** Here. _Rationale:_ one place to read and reword. _Rejected:_ literals in commands.

## Referenced by

[[src/PuduLangFui/Cli/Commands/Add]] · [[src/PuduLangFui/Cli/Commands/Apply]] · [[src/PuduLangFui/Cli/Commands/Build]] · [[src/PuduLangFui/Cli/Commands/Context]] · [[src/PuduLangFui/Cli/Commands/Icons]] · [[src/PuduLangFui/Cli/Commands/Init]] · [[src/PuduLangFui/Cli/Commands/Search]] · [[src/PuduLangFui/Cli/Commands/View]] · [[src/PuduLangFui/Cli/Dispatch/Router]] · [[src/PuduLangFui/Cli/Model/Config]] · [[src/PuduLangFui/Cli/Model/IconLibrary]] · [[src/PuduLangFui/Cli/Model/Icons]] · [[src/PuduLangFui/Cli/Workspace/Project]] · [[src/PuduLangFui/Cli/Workspace/Registry]] · [[src/PuduLangFui/Constants/_MOC]]
