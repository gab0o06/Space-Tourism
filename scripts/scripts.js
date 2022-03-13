const menu = document.getElementById("menu-icon");
const nav = document.getElementById("menu-start");
const closemenu = document.getElementById("close-icon");

menu.addEventListener("click", () => {
  nav.classList.replace("navbar__list-background", "menu-start");
});

closemenu.addEventListener("click", () => {
  nav.classList.replace("menu-start", "navbar__list-background");
});
