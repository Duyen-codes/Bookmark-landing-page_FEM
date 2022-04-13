// const burgerIcon = document.querySelector(".burger-icon");
// const nav = document.querySelector("nav");
// const desktopLogo = document.querySelector(".desktop-logo");
// const closeIcon = document.querySelector(".close-icon");

// burgerIcon.addEventListener("click", function () {
//   nav.style.display = "block";
//   burgerIcon.style.visibility = "hidden";
//   desktopLogo.style.visibility = "hidden";
// });

// closeIcon.addEventListener("click", function () {
//   nav.style.display = "none";
//   burgerIcon.style.visibility = "visible";
//   desktopLogo.style.visibility = "visible";
// });

const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");
  console.log(visibility);
  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else if (visibility === "true") {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});
