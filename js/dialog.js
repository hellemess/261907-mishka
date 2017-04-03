"use strict";

window.dialog = (function () {
  var dialog = document.querySelector(".main-content__dialog");
  var orderBtn = document.querySelector(".product-of-week .btn");
  var productCards = document.querySelector(".main-content__container");

  var closeDialog = function () {
    dialog.classList.remove("main-content__dialog--show");
    dialog.removeEventListener("click", onClick);
    document.removeEventListener("keydown", onEscDown);
  }

  var onClick = function (evt) {
    if (evt.target.classList.contains("main-content__dialog")) {
      closeDialog();
    }
  };

  var onEscDown =  function (evt) {
    if (evt.keyCode && evt.keyCode === 27) {
      closeDialog();
    }
  };

  if (orderBtn !== null) {
    orderBtn.addEventListener("click", function (evt) {
      evt.preventDefault();
      dialog.classList.add("main-content__dialog--show");
      dialog.addEventListener("click", onClick);
      document.addEventListener("keydown", onEscDown);
    });
  }

  if (productCards !== null) {
    productCards.addEventListener("click", function (evt) {
      if (evt.target.classList.contains("product__cart") || evt.target.tagName === "svg" || evt.target.tagName === "use") {
        evt.preventDefault();
        dialog.classList.add("main-content__dialog--show");
        dialog.addEventListener("click", onClick);
        document.addEventListener("keydown", onEscDown);
      }
    });
  }
})();
