
const menuButton = document.getElementById("menu-button");
const menuLabel = document.getElementById("menu-label");
const menu = document.getElementById("menu");
const body = document.body;
const overlay = document.getElementById("overlay");

function toggleMenu() {
  if (!body.classList.contains("menu-open")) {
    body.classList.add("menu-open");
    menuButton.setAttribute("aria-expanded", "true");
    menuButton.setAttribute("aria-label", "閉じる");
    menu.inert = false;
    if (menuLabel) {
      menuLabel.textContent = "CLOSE";
    }
  } else {
    body.classList.remove("menu-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "メニュー");
    menu.inert = true;
    if (menuLabel) {
      menuLabel.textContent = "MENU";
    }
  }
}

if (menuButton) {
  menuButton.addEventListener("click", toggleMenu);
}

if (overlay) {
  overlay.addEventListener("click", toggleMenu);
}


const tl = gsap.timeline()

tl.from('.animate', 1, {
  x: -500,
  stagger: 0.2,
  opacity: 0,
})
.from('.box img', 1,{
  y: 500,
  scale: 1.4,
  stagger:0.2,
  opacity:0,
}).to('.box img', 2, {
   y:-100,
   stagger:0.2,
});