/* =========================================
   NAVBAR SCROLL
========================================= */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  if (window.scrollY > 30) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

/* =========================================
   MOBILE MENU
========================================= */

const menuButton = document.getElementById("menu-button");
const navLinks = document.getElementById("nav-links");

menuButton.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});

/* إغلاق القائمة بعد الضغط على أي رابط */

const navItems = document.querySelectorAll("#nav-links a");

navItems.forEach(function (item) {
  item.addEventListener("click", function () {
    navLinks.classList.remove("active");
  });
});

/* =========================================
   DARK / LIGHT MODE
========================================= */

const themeButton = document.getElementById("theme-button");

function updateThemeButton() {
  if (document.body.classList.contains("light")) {
    themeButton.textContent = "☾";
  } else {
    themeButton.textContent = "☀";
  }
}

themeButton.addEventListener("click", function () {
  document.body.classList.toggle("light");

  updateThemeButton();
});

updateThemeButton();

/* =========================================
   REVEAL ON SCROLL
========================================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");

        observer.unobserve(entry.target);
      }
    });
  },

  {
    threshold: 0.12,
  },
);

revealElements.forEach(function (element) {
  revealObserver.observe(element);
});

/* =========================================
   CURRENT YEAR
========================================= */

const yearElement = document.getElementById("year");

yearElement.textContent = new Date().getFullYear();

/* =========================================
   SMOOTH SCROLL
========================================= */

const internalLinks = document.querySelectorAll('a[href^="#"]');

internalLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    const targetId = link.getAttribute("href");

    if (targetId === "#") {
      return;
    }

    const target = document.querySelector(targetId);

    if (!target) {
      return;
    }

    event.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

/* =========================================
   IMAGE ERROR HANDLING
========================================= */

const images = document.querySelectorAll("img");

images.forEach(function (image) {
  image.addEventListener("error", function () {
    console.warn("Image could not be loaded:", image.src);

    image.style.opacity = "0.35";
  });
});