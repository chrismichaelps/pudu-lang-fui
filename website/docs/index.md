---
title: Foundation UI
description: A component system for Pudu that you own.
_layout: landing
---

<section class="fui-hero">
  <div class="fui-hero-copy">
    <span class="fui-eyebrow">Built for the Pudu language</span>
    <h1>Interfaces you own, in the language you write</h1>
    <p>Typed parts with their styles beside their markup, and a generator that puts the source in your project. Interaction comes from the platform, with a short script only where it has to.</p>
    <div class="fui-actions">
      <a class="fui-pill fui-pill-primary" href="guides/introduction.html">Read the guide</a>
      <a class="fui-pill" href="create.html">Design yours</a>
    </div>
    <div class="fui-install" role="button" tabindex="0" aria-label="Copy the install command" data-copy="fui add dialog"><span class="fui-install-mark">$</span><code>fui add dialog</code><span class="fui-install-hint">Copy</span></div>
  </div>
  <figure class="fui-sample">
    <figcaption>Confirm.pudu</figcaption>
<pre><code><i class="k">import</i> Std.Html.Build <i class="k">as</i> H
<i class="k">import</i> Ui.Composites.Dialog <i class="k">as</i> Dialog
<i class="k">import</i> Ui.Primitives.Button <i class="k">as</i> Button
<i class="k">fn</i> <i class="f">confirm</i>() -&gt; H.Node {
  H.div().holding([
    Dialog.trigger(<i class="s">"erase"</i>, Button.props())
      .says(<i class="s">"Delete"</i>),
    Dialog.dialog(<i class="s">"erase"</i>, <i class="s">"Delete project"</i>)
  ])
}</code></pre>
  </figure>
</section>

<ul class="fui-stats">
  <li><b>70</b><span>components</span></li>
  <li><b>21</b><span>agent elements</span></li>
  <li><b>8</b><span>looks to start from</span></li>
  <li><b>13</b><span>generator commands</span></li>
</ul>

<div class="fui-home"><a href="previews/home.html">Open the component mosaic</a></div>

<div class="fui-home-end">
  <a class="fui-pill fui-pill-primary" href="components/alert.html">Browse every component</a>
</div>
