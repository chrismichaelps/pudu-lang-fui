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
  import(new URL("create/main.js", document.currentScript.src).href);
}
