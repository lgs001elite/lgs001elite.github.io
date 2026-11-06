// Site-wide behaviour. No libraries needed.
document.addEventListener("DOMContentLoaded", function () {
  // 1. Mobile menu: the ☰ button shows/hides the menu (replaces Bootstrap's collapse plugin).
  var toggler = document.querySelector(".navbar-toggler");
  var menu = document.getElementById("navbarNav");
  if (toggler && menu) {
    toggler.addEventListener("click", function () {
      var open = menu.classList.toggle("show");
      toggler.classList.toggle("collapsed", !open);
      toggler.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // 2. Links to other websites (and PDFs such as the CV) open in a new tab,
  //    so content can be written as plain Markdown links.
  var links = document.querySelectorAll("a[href]");
  for (var i = 0; i < links.length; i++) {
    var a = links[i];
    var external = /^https?:/.test(a.protocol) && a.hostname !== window.location.hostname;
    if (external || /\.pdf$/i.test(a.pathname)) {
      a.target = "_blank";
      a.rel = "noopener";
    }
  }
});
