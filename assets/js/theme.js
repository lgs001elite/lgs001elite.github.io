// Light/dark theme toggle.
// Loaded in <head> so the saved (or system) theme is applied before the page paints.
(function () {
  var KEY = "theme";
  var root = document.documentElement;

  function load() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function save(theme) { try { localStorage.setItem(KEY, theme); } catch (e) { /* storage blocked */ } }
  function apply(theme) {
    if (theme === "dark") root.setAttribute("data-theme", "dark");
    else root.removeAttribute("data-theme");
  }

  var theme = load();
  if (theme !== "dark" && theme !== "light") {
    var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    theme = prefersDark ? "dark" : "light";
  }
  apply(theme);

  document.addEventListener("DOMContentLoaded", function () {
    var button = document.getElementById("light-toggle");
    if (!button) return;
    button.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.classList.add("transition");
      window.setTimeout(function () { root.classList.remove("transition"); }, 500);
      apply(next);
      save(next);
    });
  });
})();
