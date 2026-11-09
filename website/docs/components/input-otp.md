---
title: Input Otp
description: A one-time code as one field.
---

# Input Otp

A one-time code as one field.

<div class="fui-preview"><a href="../previews/input-otp.html">Open the Input Otp preview</a></div>

## Installation

```bash
fui add input-otp
```

## Usage

```pudu
InputOtp.inputOtp("code", 6)
```

## API

```pudu
export fn inputOtp(name: Str, length: Int = 6) -> H.Node
export fn style() -> Css.Block
```
