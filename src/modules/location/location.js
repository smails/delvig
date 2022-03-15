const ln = new Swiper('.location__slider .swiper-container', {
  speed: 400,
  loop: true,
  slidesPerView: 3,
  spaceBetween: 25,
  breakpoints: {
    575: {
      slidesPerView: 'auto',
    },
    1023: {
      slidesPerView: 2,
    },
    1200: {
      spaceBetween: 10,
    },
  },
});

$('.location__btn_next').click(() =>{
  ln.slideNext();
})
$('.location__btn_prev').click(() =>{
  ln.slidePrev();
})