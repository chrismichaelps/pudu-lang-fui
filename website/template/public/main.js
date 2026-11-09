/* Turns each preview placeholder into a frame, sized to its content and matching the page's mode. */
function currentMode() {
  var chosen = document.documentElement.getAttribute("data-theme");

  if (chosen === "dark" || chosen === "light") return chosen;

  return matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function fit(frame) {
  var page = frame.contentDocument;

  if (!page) return;

  page.documentElement.setAttribute("data-mode", currentMode());
  frame.parentElement.style.height = page.documentElement.scrollHeight + "px";
}

document.querySelectorAll(".fui-preview, .fui-home").forEach(function (holder) {
  var link = holder.querySelector("a");
  var frame = document.createElement("iframe");

  if (!link) return;

  frame.title = link.textContent;
  frame.src = link.href;
  frame.addEventListener("load", function () {
    fit(frame);
    setTimeout(function () { fit(frame); }, 300);
  });
  holder.replaceChild(frame, link);
});

new MutationObserver(function () {
  document.querySelectorAll(".fui-preview iframe, .fui-home iframe").forEach(fit);
}).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
