'use strict';

window.mobileMenu = (function () {
  var mainNav = document.querySelector('.main-header__main-nav');
  var menuToggle = mainNav.querySelector('.main-header__menu-toggle');

  mainNav.classList.remove('main-header__main-nav--no-js');

  menuToggle.addEventListener('click', function (evt) {
    evt.preventDefault();
    mainNav.classList.toggle('main-header__main-nav--closed');
    mainNav.classList.toggle('main-header__main-nav--opened');
  });
})();
