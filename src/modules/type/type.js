$('.type-plane__sl-btn').click(function(){
  if(!$(this).hasClass('active')){
    $(this).addClass("active").siblings().removeClass('active');
    $(this).parent().toggleClass('right');
  }
})

$('.type__sl-btn').click(function(){
  if(!$(this).hasClass('active')){
    $(this).addClass("active").siblings().removeClass('active');
  }
})

$('.type__btn').click(function(){
  if(!$(this).hasClass('active')){
    $(this).addClass("active").siblings().removeClass('active');
  }
})