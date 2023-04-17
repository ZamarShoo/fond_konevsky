const swiper = new Swiper(".first-slide_swiper", {
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
