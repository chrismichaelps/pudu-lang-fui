/* Turns each preview placeholder into a frame, sized to its content and matching the page's mode. */
var HOME_SHOWN = 0.9;
var HOME_PHONE_LIMIT = 1800;
var PHONE_WIDTH = 768;

function currentMode() {
  var chosen = document.documentElement.getAttribute("data-theme");

  if (chosen === "dark" || chosen === "light") return chosen;

  return matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function fit(frame) {
  var page = frame.contentDocument;

  if (!page) return;

  var holder = frame.parentElement;

  page.documentElement.setAttribute("data-mode", currentMode());

  if (holder.classList.contains("fui-home")) {
    frame.style.height = "0";

    var full = page.documentElement.scrollHeight;
    var shown = Math.round(full * HOME_SHOWN);

    frame.style.height = full + "px";
    holder.style.height = (innerWidth < PHONE_WIDTH ? Math.min(shown, HOME_PHONE_LIMIT) : shown) + "px";
    return;
  }

  holder.style.height = page.documentElement.scrollHeight + "px";
}

document.querySelectorAll(".fui-preview, .fui-home").forEach(function (holder) {
  var link = holder.querySelector("a");
  var frame = document.createElement("iframe");

  if (!link) return;

  frame.title = link.textContent;
  frame.src = link.href;

  if (holder.classList.contains("fui-home")) frame.setAttribute("scrolling", "no");

  frame.addEventListener("load", function () {
    fit(frame);
    setTimeout(function () { fit(frame); }, 300);
  });
  holder.replaceChild(frame, link);
});

new MutationObserver(function () {
  document.querySelectorAll(".fui-preview iframe, .fui-home iframe").forEach(fit);
}).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

addEventListener("resize", function () {
  document.querySelectorAll(".fui-home iframe").forEach(fit);
});

document.querySelectorAll("[data-copy]").forEach(function (button) {
  function copy() {
    var hint = button.querySelector(".fui-install-hint");

    navigator.clipboard.writeText(button.getAttribute("data-copy")).then(function () {
      hint.textContent = "Copied";
      setTimeout(function () { hint.textContent = "Copy"; }, 1200);
    });
  }

  button.addEventListener("click", copy);
  button.addEventListener("keydown", function (event) {
    if (event.key !== "Enter" && event.key !== " ") return;

    event.preventDefault();
    copy();
  });
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
