import { Pagination, Navigation } from 'swiper/modules';

export const swiperParams = {
  slidesPerView: 1,
  modules: [Pagination, Navigation],
  navigation: {
    prevEl: '.pagination-prev',
    nextEl: '.pagination-next',
  },
  speed: 0,
};