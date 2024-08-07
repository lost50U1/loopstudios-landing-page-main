const openMenu = document.querySelector("#open");
const closeMenu = document.querySelector("#close");
const menuButton = document.querySelector("#menu");
const menuBar = document.querySelector("#menubar");
const headerBar = document.querySelector("#header");
const hero = document.querySelector("#hero");

menuButton.addEventListener("click", () => {
  openMenu.classList.toggle("hidden");
  closeMenu.classList.toggle("hidden");
  if (openMenu.classList.contains("hidden")) {
    menuBar.classList.toggle("hidden");
    headerBar.style.background = "black";
    hero.classList.add("hidden");
  } else {
    menuBar.classList.add("hidden");
    headerBar.style.background = "url('images/mobile/image-hero.jpg')";
    hero.classList.remove("hidden");
  }
});
