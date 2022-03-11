const sale = new Swiper('.sale__slider', {
  speed: 400,
  slidesPerView: 'auto',
  spaceBetween: 5,
  loop: true
});

$('.sale__btn_next').click(() =>{
  sale.slideNext();
})
$('.sale__btn_prev').click(() =>{
  sale.slidePrev();
})