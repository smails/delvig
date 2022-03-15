if (document.querySelectorAll('.vnt .swiper-container').length) {
  const vantage = new Swiper('.vnt .swiper-container', {
    speed: 400,
    slidesPerView: 'auto',
    spaceBetween: 5,
  });
  
}

if (!isTouchDevice()) {
  $('.vnt__box').mouseenter(function () {
    $(this).find('.vnt__text').slideDown();
  })
  $('.vnt__box').mouseleave(function () {
    $('.vnt__text').slideUp();
  })
}

