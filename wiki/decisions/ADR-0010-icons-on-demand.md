---
type: decision
status: Accepted
tags: [adr]
---

# ADR-0010: Icon libraries are fetched on demand

## Context

More than two hundred icon libraries hold several hundred thousand icons under many licenses.

## Decision

The package draws a small set of its own. `fui icons add library:name` fetches the requested icons into
an owned module, so every library is available, a program carries only what it uses, and a project sees
each library's license before adding from it.

## Alternatives

- Bundling every library: far too large, and a license notice for each.
- Bundling one library: a subset presented as complete.

## Referenced by

[[CHANGELOG]] · [[decisions/_MOC]]
