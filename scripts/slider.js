$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    margin: 0,
    loop: true,
    autoplay: true,
    autoplayHoverPause : true,
    autoHeight : false,
    startPosition: 1,
    autoplayTimeout: 10000, //скороость смены слайдов
  });
});