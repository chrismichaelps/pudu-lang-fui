---
title: Settings
description: A settings form in sections.
---

# Settings

A settings form in sections.

<div class="fui-preview"><a href="../previews/settings.html">Open the Settings preview</a></div>

## Installation

```bash
fui add settings
```

## Usage

```pudu
Settings.settings("#", "Ada", "ada@example.com", true)
```

## API

```pudu
/// A settings form posting to `action`.
export fn settings(action: Str, displayName: Str, email: Str, notifications: Bool) -> H.Node

/// The styles of a settings form.
export fn style() -> Css.Block
```
