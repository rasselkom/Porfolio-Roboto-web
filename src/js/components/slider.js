import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
const swiper = new Swiper('.swiper', {
  slidesPerView: 2,
  loop: true,
  spaceBetween: 0,
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 320px
    480: {
      spaceBetween: 30,
    },
    // when window width is >= 480px
    980: {
      slidesPerView: 3,
      spaceBetween: 20,
    },

    // when window width is >= 640px
    1440: {
      slidesPerView: 4,
      spaceBetween: 80,
    }
  }
});
