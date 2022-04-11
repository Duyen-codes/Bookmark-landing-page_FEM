const burgerIcon = document.querySelector(".burger-icon");
const nav = document.querySelector("nav");
const desktopLogo = document.querySelector(".desktop-logo");
const closeIcon = document.querySelector(".close-icon");

burgerIcon.addEventListener("click", function () {
  nav.style.display = "block";
  burgerIcon.style.visibility = "hidden";
  desktopLogo.style.visibility = "hidden";
});

closeIcon.addEventListener("click", function () {
  nav.style.display = "none";
  burgerIcon.style.visibility = "visible";
  desktopLogo.style.visibility = "visible";
});
