const variants = new Swiper('.variants__slider', {
  speed: 400,
  slidesPerView: 4,
  spaceBetween: 20,
  breakpoints: {
    1023: {
      slidesPerView: 3,
    },
    1023: {
      slidesPerView: 'auto',
    },
  },
});

$('.variants__btn_next').click(() =>{
  variants.slideNext();
  $('.variants__btn').removeClass('disabled');
  if(variants.isEnd){
    $('.variants__btn_next').addClass('disabled');
  } else {
    $('.variants__btn_next').removeClass('disabled');
  }
})
$('.variants__btn_prev').click(() =>{
  variants.slidePrev();
  $('.variants__btn').removeClass('disabled');
  if(variants.isBeginning){
    $('.variants__btn_prev').addClass('disabled');
  } else {
    $('.variants__btn_prev').removeClass('disabled');
  }
})