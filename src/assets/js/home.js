import { gsap } from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Splide from "@splidejs/splide";
import "./nav";

gsap.registerPlugin(MorphSVGPlugin, ScrollTrigger);

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

const entryTl = gsap.timeline({});

entryTl

  .from(".hero", {
    opacity: 0,
    duration: 0.5,
  })
  .from(".download", {
    opacity: 0,
    duration: 0.5,
  });

const policyTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".policy",
    start: "top 70%",
  },
});
const aboutTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".about",
    start: "top 70%",
  },
});
const newsTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".news",
    start: "top 70%",
  },
});
const contactTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".contact",
    start: "top 70%",
  },
});
const faqTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".faq",
    start: "top 70%",
  },
});
const footerTl = gsap.timeline({
  scrollTrigger: {
    trigger: "footer",
    start: "top 70%",
  },
});

const linesTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".lines",
    start: "top 70%",
  },
});
const navgan = gsap.timeline({
  scrollTrigger: {
    trigger: ".navgan",
    start: "top 10%",
  },
});
const avanSafar = gsap.timeline({
  scrollTrigger: {
    trigger: ".avan-safar",
    start: "top 70%",
  },
});
const serviceTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".service",
    start: "top 70%",
  },
});
const midTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".mid",
    start: "top 70%",
  },
});

policyTl
  .from(
    ".policy-right",
    {
      x: 500,
      opacity: 0,
    },
    "0"
  )
  .from(
    ".policy-left",
    {
      opacity: 0,
      x: -500,
    },
    "0"
  );
newsTl
  .from(
    ".news-right",
    {
      x: 500,
      opacity: 0,
    },
    "0"
  )
  .from(
    ".news-left",
    {
      opacity: 0,
      x: -500,
    },
    "0"
  );
faqTl
  .from(
    ".faq-right",
    {
      x: 500,
      opacity: 0,
    },
    "0"
  )
  .from(
    ".faq-left",
    {
      opacity: 0,
      x: -500,
    },
    "0"
  );
contactTl
  .from(
    ".contact-right",
    {
      x: 500,
      opacity: 0,
    },
    "0"
  )
  .from(
    ".contact-left",
    {
      opacity: 0,
      x: -500,
    },
    "0"
  );
linesTl
  .from(
    ".lines-right",
    {
      x: 500,
      opacity: 0,
    },
    "0"
  )
  .from(
    ".lines-left",
    {
      opacity: 0,
      x: -500,
    },
    "0"
  );
aboutTl
  .from(
    ".about-right",
    {
      x: 500,
      opacity: 0,
    },

    "0"
  )
  .from(
    ".about-left",
    {
      opacity: 0,
      x: -500,
    },
    "0"
  )
  .from(
    ".about-video",
    {
      y: 200,
      opacity: 0,
    },
    "0"
  );
avanSafar.from(
  ".avan-safar",
  {
    y: -100,
    opacity: 0,
    duration: 1.5,
  },

  "0"
);

const mm = gsap.matchMedia();

mm.add("(max-width: 767px)", () => {
  gsap.fromTo(
    ".avan-safar-svg",
    { width: "4rem" },
    { duration: 1.5, width: "100%" },
    0
  );
});

mm.add("(min-width: 768px)", () => {
  gsap.fromTo(
    ".avan-safar-svg",
    { width: "16rem" },
    { duration: 1.5, width: "auto" },
    0
  );
});

navgan.from(
  ".navgan",
  {
    y: -600,
    opacity: 0,
    duration: 1.5,
  },

  "0"
);

serviceTl
  .from(
    ".service-right",
    {
      x: 500,
      opacity: 0,
    },

    "0"
  )
  .from(
    ".service-left",
    {
      opacity: 0,
      x: -500,
    },
    "0"
  )
  .from(".about-video", {
    y: 200,
  });

footerTl
  .from(
    ".footer-top",
    {
      y: -200,
      opacity: 0,
    },

    "0"
  )
  .from(
    ".footer-bottom",
    {
      opacity: 0,
      y: -200,
    },
    "0"
  );

midTl.from(".mid", {
  opacity: 0,
  duration: 0.5,
});
