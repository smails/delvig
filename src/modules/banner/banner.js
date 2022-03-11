const banner = new Swiper('.banner__slider', {
  speed: 400,
  loop: true,
  slidesPerView: 1,
  pagination: {
    direction: "vertical",
    el: '.swiper-pagination',
    clickable: true,
  },
});