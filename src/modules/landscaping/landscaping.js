const landscaping = new Swiper('.landscaping__slider', {
  speed: 400,
  loop: true,
  slidesPerView: 'auto',
  centeredSlides: true,
  pagination: {
    el: '.landscaping__range',
    type: 'fraction'
  },
  breakpoints: {
    1200: {
      pagination: {
        el: '.landscaping__range',
        type: 'bullets'
      },
    },
  },
});

$('.landscaping__btn_next').click(() =>{
  landscaping.slideNext();
})
$('.landscaping__btn_prev').click(() =>{
  landscaping.slidePrev();
})