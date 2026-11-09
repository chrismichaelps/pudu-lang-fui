---
type: module
path: "@root/src/PuduLangFui/Cli/Model/Config.pudu"
fidelity: Active
subsystem: "[[subsystems/Distribution]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.97
depth_status: DEEP
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, deep]
aliases: [PuduLangFui.Cli.Model.Config]
---

# PuduLangFui.Cli.Model.Config

## Purpose

The project's `fui.toml`.

## Interface

### Signatures

```pudu
export type Config = { root: Str, source: Str, preset: Str, registries: Array[(Str, Str)] }

export fn defaults() -> Config

export fn decode(text: Str) -> Result[Config, Str]

export fn encode(config: &Config) -> Str
```

### Linkage

- **Requires:** [[src/PuduLangFui/Constants/Cli]]

## Algorithm

1. Read with `Std.Toml`, falling back to defaults per key
2. written with a small fixed shape.

## Negative Logic (Prohibited Paths)

- ❌ Do not accept a non-identifier root.

## Edge Cases

- A missing section means no registries.

## Depth

DEPTH 0.97 (DEEP). Part of [[subsystems/Distribution]], under [[grammar/pudu]].

## Grill Log

- **Q:** Own format?
  **A:** TOML. _Rationale:_ the manifest is TOML already. _Rejected:_ JSON.

## Referenced by

[[src/PuduLangFui/Cli/Commands/Apply]] · [[src/PuduLangFui/Cli/Commands/Init]] · [[src/PuduLangFui/Cli/Model/_MOC]] · [[src/PuduLangFui/Cli/Workspace/Project]]
