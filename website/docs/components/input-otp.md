---
title: Input Otp
description: A one-time code entered across cells.
---

# Input Otp

A one-time code entered across cells.

<div class="fui-preview"><a href="../previews/input-otp.html">Open the Input Otp preview</a></div>

## Installation

```bash
fui add input-otp
```

## Usage

```pudu
InputOtp.inputOtp("code", 6, "123456")
```

## API

```pudu
export fn inputOtp(name: Str, length: Int = 6, value: Str = "") -> H.Node
export fn style() -> Css.Block
```
