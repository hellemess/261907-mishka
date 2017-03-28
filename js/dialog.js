'use strict';

window.dialog = (function () {
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
