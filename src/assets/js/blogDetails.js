import Splide from "@splidejs/splide";

new Splide(".splide-relevant", {
  direction: "rtl",
  pagination: false,
  mediaQuery: "min",
  arrows :false,
  gap : 24 ,
  perPage : 1,
  breakpoints: {
    768: {
      perPage: 3,
    },
    1000 : {
        perPage : 4
    }
  },
}).mount();