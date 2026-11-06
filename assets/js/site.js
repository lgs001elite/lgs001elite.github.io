// Open links to other websites (and PDFs such as the CV) in a new tab,
// so content can be written as plain Markdown links.
document.addEventListener("DOMContentLoaded", function () {
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
