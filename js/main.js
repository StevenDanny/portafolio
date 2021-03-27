const navMenu = document.getElementById("nav-menu");
const toggleMenu = document.getElementById("nav-toggle");
const closeMenu = document.getElementById("nav-close");
//mostrar menu
toggleMenu.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});
//ocultar menu
closeMenu.addEventListener("click", () => {
  navMenu.classList.remove("show");
});
//eliminar menu con elementos
const navLink = document.querySelectorAll(".nav_link");

function linkAction() {
  navMenu.classList.remove("show");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));
