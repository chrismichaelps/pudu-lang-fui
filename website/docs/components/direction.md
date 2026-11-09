---
title: Direction
description: Sets a region's text direction.
---

# Direction

Sets a region's text direction.

<div class="fui-preview"><a href="../previews/direction.html">Open the Direction preview</a></div>

## Installation

```bash
fui add direction
```

## Usage

```pudu
Direction.direction("rtl").holding([loginCard(["تسجيل الدخول إلى حسابك", "أدخل بريدك الإلكتروني أدناه لتسجيل الدخول إلى حسابك", "إنشاء حساب", "البريد الإلكتروني", "كلمة المرور", "نسيت كلمة المرور؟", "تسجيل الدخول", "تسجيل الدخول باستخدام Google"])])
```

## API

```pudu
/// A region laid out in the given direction, `ltr` or `rtl`.
export fn direction(value: Str) -> H.Node

/// The styles of a region.
export fn style() -> Css.Block
```
