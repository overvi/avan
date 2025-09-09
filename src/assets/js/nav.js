const toggleBtn = document.getElementById("mobile-nav-toggle");
const nav = document.getElementById("mobile-nav");
const backdrop = document.getElementById("mobile-nav-backdrop");
const closeBtn = document.getElementById("close-nav");

if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    if (navOpen) closeNav();
  });
}



let navOpen = false;

function openNav() {
  nav.classList.remove("opacity-0", "pointer-events-none");
  nav.classList.add("opacity-100", "pointer-events-auto");

  backdrop.classList.remove("opacity-0", "pointer-events-none");
  backdrop.classList.add("opacity-100", "pointer-events-auto");

  toggleBtn.classList.add("toggled");
  toggleBtn.parentElement.classList.add("has-toggled");

  navOpen = true;
}

function closeNav() {
  nav.classList.remove("opacity-100", "pointer-events-auto");
  nav.classList.add("opacity-0", "pointer-events-none");

  backdrop.classList.remove("opacity-100", "pointer-events-auto");
  backdrop.classList.add("opacity-0", "pointer-events-none");

  toggleBtn.classList.remove("toggled");
  toggleBtn.parentElement.classList.remove("has-toggled");

  navOpen = false;
}

toggleBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  navOpen ? closeNav() : openNav();
});

backdrop.addEventListener("click", (e) => {
  if (navOpen && !nav.contains(e.target) && e.target !== toggleBtn) {
    closeNav();
  }
});
