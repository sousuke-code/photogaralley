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



function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}



requestAnimationFrame(raf)

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.img',
    scrub: true
  }
})
.to('.img', {
  stagger: .2,
  y: -700,
  scrub: true
})