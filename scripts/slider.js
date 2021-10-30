$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    nav: true,
    dots: false,
    Horizontal: true,
    items: 5.5,
    margin: 0,
    loop: false,
    autoplay: true,
    autoplayHoverPause : true,
    autoHeight : false,
    startPosition: 1,
    autoplayTimeout: 10000, //скороость смены слайдов
  });
});