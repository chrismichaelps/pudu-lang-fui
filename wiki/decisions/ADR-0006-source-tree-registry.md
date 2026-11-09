---
type: decision
status: Accepted
tags: [adr]
---

# ADR-0006: The source tree is the registry

## Decision

An item's name, description, and dependencies are read from its file: the name from the path, the
description from the header anchor, the dependencies from its imports. Packages arrive through
`pudu install`, so a [[domain/Registry]] needs no server, and `fui build` writes `registry.json` as an
index for browsing. `fui add` rewrites the module name and sibling imports and leaves `Core`,
`Domain`, and `Theme` imports pointing at the dependency, which is what keeps [[domain/Ownership]] and
upstream fixes compatible.

## Alternatives

- A hand-kept manifest: drifts from the files.
- A hosted registry service: an operational burden with no gain over packages.

## Referenced by

[[CHANGELOG]] · [[decisions/_MOC]] · [[subsystems/Distribution]]
