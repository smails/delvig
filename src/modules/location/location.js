const ln = new Swiper('.location__slider .swiper-container', {
  speed: 400,
  loop: true,
  slidesPerView: 3,
  spaceBetween: 25,
});

$('.location__btn_next').click(() =>{
  ln.slideNext();
})
$('.location__btn_prev').click(() =>{
  ln.slidePrev();
})