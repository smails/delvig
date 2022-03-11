const flat = new Swiper('.flat__slider', {
  speed: 400,
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.flat__btn_next',
    prevEl: '.flat__btn_prev',
  },
});
