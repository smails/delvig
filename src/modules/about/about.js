
const rowAbout1 = new Swiper('.row-about__sl-1', {
  speed: 400,
  slidesPerView: 3,
  spaceBetween: 20,
  breakpoints: {
    1023: {
      slidesPerView: 'auto',
      spaceBetween: 10,
    },
  },
});
const rowAbout2 = new Swiper('.row-about__sl-2', {
  speed: 400,
  slidesPerView: 3,
  spaceBetween: 20,
  breakpoints: {
    1023: {
      slidesPerView: 'auto',
      spaceBetween: 10,
    },
  },
});

$('.row-about__btn_next.row-about__btn_1').click(() =>{
  rowAbout1.slideNext();
  $('.row-about__btn_1').removeClass('disabled');
  if(rowAbout1.isEnd){
    $('.row-about__btn_next.row-about__btn_1').addClass('disabled');
  } else {
    $('.row-about__btn_next.row-about__btn_1').removeClass('disabled');
  }
})
$('.row-about__btn_prev.row-about__btn_1').click(() =>{
  rowAbout1.slidePrev();
  $('.row-about__btn_1').removeClass('disabled');
  if(rowAbout1.isBeginning){
    $('.row-about__btn_prev.row-about__btn_1').addClass('disabled');
  } else {
    $('.row-about__btn_prev.row-about__btn_1').removeClass('disabled');
  }
})
$('.row-about__btn_next.row-about__btn_2').click(() =>{
  rowAbout2.slideNext();
  $('.row-about__btn_2').removeClass('disabled');
  if(rowAbout2.isEnd){
    $('.row-about__btn_next.row-about__btn_2').addClass('disabled');
  } else {
    $('.row-about__btn_next.row-about__btn_2').removeClass('disabled');
  }
})
$('.row-about__btn_prev.row-about__btn_2').click(() =>{
  rowAbout2.slidePrev();
  $('.row-about__btn_2').removeClass('disabled');
  if(rowAbout2.isBeginning){
    $('.row-about__btn_prev.row-about__btn_2').addClass('disabled');
  } else {
    $('.row-about__btn_prev.row-about__btn_2').removeClass('disabled');
  }
})

const infoAbout = new Swiper('.info-about__slider', {
  speed: 400,
  slidesPerView: 2,
  spaceBetween: 1,
  loop: true,
  breakpoints: {
    575: {
      slidesPerView: 2,
    },
    1023: {
      slidesPerView: 3,
    },
  },
});
$('.info-about__btn_next').click(() =>{
  infoAbout.slideNext();
})