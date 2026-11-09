---
title: Login
description: A sign-in section.
---

# Login

A sign-in section.

<div class="fui-preview"><a href="../previews/login.html">Open the Login preview</a></div>

## Installation

```bash
fui add login
```

## Usage

```pudu
column("24rem", [Login.login("#", &[])])
```

## API

```pudu
export fn login(action: Str, errors: &Array[Str]) -> H.Node
export fn style() -> Css.Block
```
