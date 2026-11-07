// Theme toggle, mobile menu, and the Abstract / Bib buttons on publications.
(function () {
  var root = document.documentElement;

  var themeBtn = document.querySelector(".theme-toggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  }

  // Follow the system setting until the visitor picks a theme themselves.
  if (window.matchMedia) {
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function (e) {
      var saved = null;
      try { saved = localStorage.getItem("theme"); } catch (err) {}
      if (!saved) root.setAttribute("data-theme", e.matches ? "dark" : "light");
    });
  }

  var menuBtn = document.querySelector(".menu-toggle");
  var menu = document.querySelector(".menu");
  if (menuBtn && menu) {
    menuBtn.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Buttons with data-toggle="id" show or hide the element with that id.
  document.querySelectorAll("[data-toggle]").forEach(function (btn) {
    var target = document.getElementById(btn.getAttribute("data-toggle"));
    if (!target) return;
    btn.setAttribute("aria-expanded", "false");
    btn.addEventListener("click", function () {
      var group = btn.closest(".pub-body");
      // Close the other panel of the same paper first.
      if (group) {
        group.querySelectorAll("[data-toggle]").forEach(function (other) {
          if (other !== btn) {
            other.setAttribute("aria-expanded", "false");
            var t = document.getElementById(other.getAttribute("data-toggle"));
            if (t) t.hidden = true;
          }
        });
      }
      target.hidden = !target.hidden;
      btn.setAttribute("aria-expanded", target.hidden ? "false" : "true");
    });
  });

  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
