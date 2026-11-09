---
title: Registries
description: Any package can distribute components.
---

# Registries

A registry is a Pudu package with `Components`, `Elements`, or `Blocks` under its module root. There is
no server and no manifest to maintain: an item's name, description, and dependencies are read from its
file.

```bash
pudu install @acme/ui
```

```toml
[registries]
"@acme" = "deps/@acme/ui"
```

```bash
./fui add @acme/fancy-card
```

Packages are GitHub repositories, so publishing a registry is `pudu release`, and access follows the
repository's own permissions.

## Index

`fui build` writes `registry.json` for browsing without a checkout.

```json
{
  "root": "AcmeUi",
  "items": [{"name": "fancy-card", "kind": "component", "module": "AcmeUi.Components.Primitives.FancyCard", "description": "a card", "dependencies": []}]
}
```

## Checking a registry

Run `fui doctor` in a project that has added its items.
