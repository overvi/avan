import { gsap } from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Splide from "@splidejs/splide";

gsap.registerPlugin(MorphSVGPlugin, ScrollTrigger);

const toggleBtn = document.getElementById("mobile-nav-toggle");
const nav = document.getElementById("mobile-nav");
const backdrop = document.getElementById("mobile-nav-backdrop");

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

const groups = document.querySelectorAll(".circle-group");

const tl = gsap.timeline({
  repeat: -1,
  repeatRefresh: true,
  paused: true,
});

groups.forEach((group) => {
  const circle = group.querySelector(".circle");
  const highlights = group.querySelectorAll(".highlight");

  tl.to(
    circle,
    {
      duration: 0.6,
      attr: {
        r: () => {
          const isLarge = Math.random() > 0.5;

          highlights.forEach(
            (h) => (h.style.opacity = isLarge ? h.getAttribute("opacity") : "0")
          );
          return isLarge ? 6 : 3;
        },
      },
    },
    0
  );
});

ScrollTrigger.create({
  trigger: "#lines",
  start: "top center",
  end: "bottom center",
  onEnter: () => tl.play(),
  onLeave: () => tl.pause(),
  onEnterBack: () => tl.play(),
  onLeaveBack: () => tl.pause(),
});

new Splide(".splide", {
  direction: "rtl",
  padding: { right: "15%", left: "15%" },
  pagination: false,
  mediaQuery: "min",
  arrows: false,
  perPage: 1,
  focus: "center",
  breakpoints: {
    768: {
      padding: { right: "30%", left: "30%" },
      perPage: 1,
      arrows: true,
    },
  },
}).mount();

document.addEventListener("DOMContentLoaded", function () {
  const accordionButtons = document.querySelectorAll("[data-accordion-target]");
  accordionButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const contentId = btn.getAttribute("data-accordion-target");
      const contentEl = document.getElementById(contentId);
      const isExpanded = btn.getAttribute("aria-expanded") === "true";

      accordionButtons.forEach((otherBtn) => {
        const otherContentId = otherBtn.getAttribute("data-accordion-target");
        const otherContentEl = document.getElementById(otherContentId);

        otherBtn.setAttribute("aria-expanded", "false");
        otherBtn.parentElement.classList.remove("is-expanded");
        otherContentEl.classList.add("hidden");
      });

      if (!isExpanded) {
        btn.setAttribute("aria-expanded", "true");
        btn.parentElement.classList.add("is-expanded");
        contentEl.classList.remove("hidden");
      }
    });
  });
});
