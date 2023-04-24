const mobile_first = new Swiper(".first-slide_swiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    650: {
      slidesPerView: 2,
    },
  },
  pagination: {
    el: ".first-slide_swiper-pagination",
  },
});

const need_help_index = new Swiper(".adress-help_body", {
  loop: false,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    650: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 1,
    },
  },
  navigation: {
    nextEl: ".adress-help-next",
    prevEl: ".adress-help-prev",
  },
});

const we_help_index = new Swiper(".we-help_body", {
  loop: false,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    650: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  },
  navigation: {
    nextEl: ".we-help-next",
    prevEl: ".we-help-prev",
  },
});
