const navBtn = document.querySelector(".bar");
const ul = document.querySelector("ul");
const body = document.querySelector("body");

navBtn.addEventListener("click", () => {
  ul.classList.toggle("nav-show");
});
