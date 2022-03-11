/* eslint-disable eqeqeq */

$('.js-open-modal').click((e) => {
  e.preventDefault();
  $('.modal').hide();
  const modal = e.target.getAttribute('href') != null ? e.target.getAttribute('href') : e.target.parentElement.getAttribute('href');
  $(`[data-type="${modal}"]`).fadeIn();
});

$(window).click((e) => {
  if (e.target.classList.contains('modal') && e.target.style.display == 'block') {
    $('.modal').fadeOut();
  }
});

$('.modal__close').click((e) => {
  $('.modal').fadeOut();
});

$('select').select2({
  minimumResultsForSearch: Infinity,
  width: 'style',
  selectOnClose: true,
});


$('input[type="tel"]').mask('+7(999) 999-99-99', { autoclear: false });


let isValid;
let check;
$('form').submit(function (e) {
  e.preventDefault();
  const $form = $(this);
  $form.find('.required').each((index, elem) => {
    if (elem.value === '') {
      elem.classList.add('error');
    } else {
      isValid = true;
    }
  });
  if (!$form.find('.callback__text').prop('checked')) {
    // eslint-disable-next-line no-unused-expressions
    !$form.find('.callback__text').addClass('error');
    check = false;
  } else {
    $('.callback__text').removeClass('error');
    check = true;
  }
  if (isValid !== false && check) {
    setTimeout(() => {
      $form.trigger('reset');
      // $('.success').fadeIn();
    }, 1000);
  }
});

document.querySelectorAll('.group__field').forEach((elem) => {
  elem.addEventListener('focus', (i) => {
    i.target.previousElementSibling.style.cssText = 'font-size: 10px; top: -15px';
    if (i.target.nextElementSibling) {
      i.target.nextElementSibling.remove();
    }
    i.target.classList.remove('error');
  });
});
document.querySelectorAll('.group__field').forEach((elem) => {
  elem.addEventListener('blur', (i) => {
    if (i.target.value === '') {
      i.target.previousElementSibling.style.cssText = '';
    }
  });
});