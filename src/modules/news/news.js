const news = new Swiper('.news__slider', {
  speed: 400,
  slidesPerView: 'auto',
  spaceBetween: 20,
  loop: true
});

$('.news__btn_next').click(() =>{
  news.slideNext();
})
$('.news__btn_prev').click(() =>{
  news.slidePrev();
})