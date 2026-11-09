---
type: decision
status: Accepted
tags: [adr]
---

# ADR-0007: Kinds dispatch through tables

## Decision

A closed set of kinds is resolved by a `const` table from the kind's spelling to what it means: a
value, or a factory function. `Core.picked` reads one. Commands, chart renderers, question controls,
typography elements, and status icons all work this way. Adding a kind is one line.

## Alternatives

- `if` ladders: every new kind edits control flow.
- `match` over a sum: exhaustive, but puts behaviour in the dispatcher. It stays for sums whose
  variants carry different payloads, such as a file tree entry.

## Referenced by

[[CHANGELOG]] · [[decisions/_MOC]] · [[grammar/pudu]]
