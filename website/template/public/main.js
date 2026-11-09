/* Turns each preview placeholder into a frame, sized to its content and matching the page's mode. */
var HOME_SHOWN = 0.9;
var HOME_PHONE_LIMIT = 1800;
var PHONE_WIDTH = 768;

function currentMode() {
  var chosen = document.documentElement.getAttribute("data-theme");

  if (chosen === "dark" || chosen === "light") return chosen;

  return matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

var CANVAS_SMALLEST = 560;
var CANVAS_HEIGHT = 640;

function fitCanvas(frame, holder) {
  var width = Number(holder.getAttribute("data-canvas"));
  var scale = Math.min(1, holder.clientWidth / width);

  holder.classList.add("is-canvas");
  frame.style.width = width + "px";
  frame.style.height = CANVAS_HEIGHT + "px";
  frame.style.transform = "scale(" + scale + ")";
  holder.style.height = Math.round(CANVAS_HEIGHT * scale) + "px";
}

function fit(frame) {
  var page = frame.contentDocument;

  if (!page) return;

  var holder = frame.parentElement;

  page.documentElement.setAttribute("data-mode", currentMode());

  if (holder.hasAttribute("data-canvas") && holder.clientWidth >= CANVAS_SMALLEST) {
    fitCanvas(frame, holder);
    return;
  }

  holder.classList.remove("is-canvas");
  frame.style.width = frame.style.transform = "";

  if (holder.classList.contains("fui-home")) {
    frame.style.height = "0";

    var full = page.documentElement.scrollHeight;
    var shown = Math.round(full * HOME_SHOWN);

    frame.style.height = full + "px";
    holder.style.height = (innerWidth < PHONE_WIDTH ? Math.min(shown, HOME_PHONE_LIMIT) : shown) + "px";
    return;
  }

  frame.style.height = "";
  holder.style.height = page.documentElement.scrollHeight + "px";
}

document.querySelectorAll(".fui-preview iframe, .fui-home iframe").forEach(function (frame) {
  frame.addEventListener("load", function () {
    fit(frame);
    setTimeout(function () { fit(frame); }, 300);
  });

  if (frame.contentDocument && frame.contentDocument.readyState === "complete") fit(frame);
});

/* Parent rows open and close their section; their own pages are one level down. */
document.querySelectorAll(".toc .has-children > a").forEach(function (link) {
  link.setAttribute("aria-expanded", String(link.parentElement.classList.contains("expanded")));
  link.addEventListener("click", function (event) {
    event.preventDefault();
    link.setAttribute("aria-expanded", String(link.parentElement.classList.toggle("expanded")));
  });
});

new MutationObserver(function () {
  document.querySelectorAll(".fui-preview iframe, .fui-home iframe").forEach(fit);
}).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

addEventListener("resize", function () {
  document.querySelectorAll(".fui-home iframe, .fui-preview[data-canvas] iframe").forEach(fit);
});

/* Keeps the phone menus exclusive, and closes them from outside. */
var PANELS = [[".menu-toggle", "#sidebar"], [".nav-toggle", "#navbar"]];

function closePanel(pair) {
  var toggle = document.querySelector(pair[0]);
  var panel = document.querySelector(pair[1]);

  if (!toggle || !panel || !panel.classList.contains("open")) return;

  panel.classList.remove("open");
  toggle.setAttribute("aria-expanded", "false");
}

document.addEventListener("click", function (event) {
  PANELS.forEach(function (pair) {
    var toggle = document.querySelector(pair[0]);
    var panel = document.querySelector(pair[1]);

    if (!toggle || !panel) return;
    if (panel.contains(event.target) || toggle.contains(event.target)) return;

    closePanel(pair);
  });
});

if (document.querySelector(".fui-create")) {
  import(new URL("design/main.js", document.currentScript.src).href);
}

/* The selection route works where the clipboard permission is refused. */
function copyBySelection(text) {
  var field = document.createElement("textarea");

  field.value = text;
  field.readOnly = true;
  field.style.position = "fixed";
  field.style.opacity = "0";
  document.body.appendChild(field);
  field.select();

  var copied = document.execCommand("copy");

  field.remove();

  return copied ? Promise.resolve() : Promise.reject(new Error("copy refused"));
}

window.fuiCopyText = function (text) {
  if (!navigator.clipboard) return copyBySelection(text);

  return navigator.clipboard.writeText(text).catch(function () { return copyBySelection(text); });
};

var COPY_LABEL = "Copy";
var COPY_SHOWN_FOR = 1600;
var COPY_CHECK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>';

function showCopyResult(button, worked) {
  clearTimeout(button.fuiCopyTimer);
  button.classList.toggle("is-copied", worked);
  button.classList.toggle("is-refused", !worked);
  button.innerHTML = worked ? COPY_CHECK + "Copied" : "Copy failed";
  button.setAttribute("aria-label", worked ? "Copied" : "Copy failed");
  button.fuiCopyTimer = setTimeout(function () {
    button.classList.remove("is-copied", "is-refused");
    button.textContent = COPY_LABEL;
    button.setAttribute("aria-label", "Copy code");
  }, COPY_SHOWN_FOR);
}

/* Runs ahead of the generator's handler, which gives no result when the clipboard refuses. */
document.addEventListener("click", function (event) {
  var button = event.target.closest(".code-block .copy");

  if (!button) return;

  event.stopImmediatePropagation();

  var code = button.closest(".code-block").querySelector("code");

  window.fuiCopyText(code ? code.textContent : "").then(
    function () { showCopyResult(button, true); },
    function () { showCopyResult(button, false); }
  );
}, true);
