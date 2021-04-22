const navBtn = document.querySelector(".bar");
const navLinks = document.querySelector(".nav-links");
const body = document.querySelector("body");

navBtn.addEventListener("click", () => {
  navLinks.classList.toggle("nav-show-ul-effect");
});
