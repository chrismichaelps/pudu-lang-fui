---
title: Signup
description: An account creation section.
---

# Signup

An account creation section.

<div class="fui-preview"><a href="../previews/signup.html">Open the Signup preview</a></div>

## Installation

```bash
fui add signup
```

## Usage

```pudu
column("24rem", [Signup.signup("#", &[])])
```

## API

```pudu
/// A form creating an account, posting to `action`.
export fn signup(action: Str, errors: &Array[Str]) -> H.Node

/// The styles of a signup section.
export fn style() -> Css.Block
```
