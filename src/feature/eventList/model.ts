import { Navigation } from 'swiper/modules';

export const swiperParams = {
  slidesPerView: 1.4,
  modules: [Navigation],
  spaceBetween: 25,
  breakpoints: {
    320: {
      slidesPerView: 1.4,
      spaceBetween: 25,
    },
    768: {
      slidesPerView: 1.5,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 80,
    },
    1921: {
      slidesPerView: 3.5,
      spaceBetween: 80,
    },
  },
  navigation: {
    prevEl: '.prev',
    nextEl: '.next',
  },
};