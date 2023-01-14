 new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    
    clickable: true
    },

    autoplay: {
        delay: 1000,
        stopOnLastSlide: false,
        disableOnInteraction: false
    },

    speed: 500,

    effect: 'fade',

    fadeEffect: {
        crossFade: true
    },
});