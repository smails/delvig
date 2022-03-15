const build = new Swiper('.build__slider', {
  speed: 400,
  loop: true,
  slidesPerView: 'auto',
  centeredSlides: true,
  pagination: {
    el: '.build__range',
    type: 'fraction'
  },
});

$('.build__btn_next').click(() =>{
  build.slideNext();
})
$('.build__btn_prev').click(() =>{
  build.slidePrev();
})

const stepBuild = new Swiper('.step-build__slider', {
  speed: 400,
  slidesPerView: 3,
  spaceBetween: 20,
  breakpoints: {
    575: {
      slidesPerView: 'auto',
      spaceBetween: 5,
    },
  },
});

$('.step-build__btn_next').click(() =>{
  stepBuild.slideNext();
  $('.step-build__btn').removeClass('disabled');
  if(stepBuild.isEnd){
    $('.step-build__btn_next').addClass('disabled');
  } else {
    $('.step-build__btn_next').removeClass('disabled');
  }
})
$('.step-build__btn_prev').click(() =>{
  stepBuild.slidePrev();
  $('.step-build__btn').removeClass('disabled');
  if(stepBuild.isBeginning){
    $('.step-build__btn_prev').addClass('disabled');
  } else {
    $('.step-build__btn_prev').removeClass('disabled');
  }
})