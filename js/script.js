'use strict';

window.script = (function () {
  var mainNav = document.querySelector('.main-header__main-nav');
  var menuToggle = mainNav.querySelector('.main-header__menu-toggle');

  mainNav.classList.remove('main-header__main-nav--no-js');

  menuToggle.addEventListener('click', function (evt) {
    evt.preventDefault();
    mainNav.classList.toggle('main-header__main-nav--closed');
    mainNav.classList.toggle('main-header__main-nav--opened');
  });

  var orderBtn = document.querySelector('.product-of-week .btn');
  var dialog = document.querySelector('.main-content__dialog');

  orderBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    dialog.classList.add('main-content__dialog--show');

    document.addEventListener('keydown', function (orderEvt) {
      if (orderEvt.keyCode && orderEvt.keyCode === 27) {
        dialog.classList.remove('main-content__dialog--show');
      }
    });
  });
})();
