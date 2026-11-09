---
type: module
path: "@root/src/PuduLangFui/Cli/Workspace/Registry.pudu"
fidelity: Active
subsystem: "[[subsystems/Distribution]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.99
depth_status: DEEP
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, deep]
aliases: [PuduLangFui.Cli.Workspace.Registry]
---

# PuduLangFui.Cli.Workspace.Registry

## Purpose

Reads a registry from a package's directory.

## Interface

### Signatures

```pudu
export type Registry = { directory: Str, moduleRoot: Str, items: Array[Item.Item] }

export fn load(directory: Str) -> Result[Registry, Str]
```

### Linkage

- **Requires:** [[src/PuduLangFui/Cli/Model/Item]] · [[src/PuduLangFui/Constants/Cli]]

## Algorithm

1. Read the manifest for source and root, list each item folder, read each file into an Item.

## Negative Logic (Prohibited Paths)

- ❌ Do not read outside the directory given.

## Edge Cases

- A directory with no manifest answers `Err`.

## Depth

DEPTH 0.99 (DEEP). Part of [[subsystems/Distribution]], under [[grammar/pudu]].

## Grill Log

- **Q:** Where is the default registry?
  **A:** The package itself under `deps/`, or the working directory when run inside the package. _Rationale:_ no flags in the common case. _Rejected:_ a required flag.

## Referenced by

[[src/PuduLangFui/Cli/Commands/Add]] · [[src/PuduLangFui/Cli/Commands/Context]] · [[src/PuduLangFui/Cli/Commands/Diff]] · [[src/PuduLangFui/Cli/Workspace/_MOC]]
