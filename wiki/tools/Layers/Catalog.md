---
type: module
path: "@root/tools/Layers/Catalog.pudu"
fidelity: Active
subsystem: "[[subsystems/Distribution]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.81
depth_status: DEEP
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, deep]
aliases: [Layers.Catalog]
---

# Layers.Catalog

## Purpose

The folders, their ranks, and what each may import.

## Interface

### Signatures

```pudu
export const RANKS: Map[Str, Int]

export const ALLOWED: Map[Str, Set[Str]]

export const PURE: Set[Str]

export const EFFECTFUL: Array[Str]

export fn folderOf(name: Str) -> Str

export fn judge(from: Str, target: Str, known: &Set[Str]) -> Option[Str]
```

### Linkage

- **Requires:** (none)

## Algorithm

1. Find a module's folder as the longest catalogued path
2. refuse imports outside its allowed set
3. pure folders may not import effectful standard modules.

## Negative Logic (Prohibited Paths)

- ❌ Do not allow an upward edge.

## Edge Cases

- An uncatalogued folder is refused.

## Depth

DEPTH 0.81 (DEEP). Part of [[subsystems/Distribution]], under [[grammar/pudu]].

## Grill Log

- **Q:** How are nested folders named?
  **A:** As `Theme/Aspects`, matching the path. _Rationale:_ a reader finds it on disk. _Rejected:_ flat names.

## Referenced by

[[architecture/LANGUAGE]] · [[decisions/ADR-0008-folders-are-layers]] · [[tools/Layers]] · [[tools/Layers/_MOC]] · [[tools/LayersTest]]
