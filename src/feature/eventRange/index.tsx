import NumberText from 'entity/number';
import { Container, DateContainer, Slide } from './ui';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { useCallback, useContext, useEffect, useRef } from 'react';
import { EventsContext } from 'shared/context';
import SwiperType  from 'swiper';
import { swiperParams } from './model';

const EventRange = () => {
  const { data: slides, activeEventsRange, handleSetActiveEventsRange } = useContext(EventsContext)
  const swiperRef = useRef<SwiperRef | null>(null);

  const handleSlideChange = useCallback((swiper: SwiperType) => {
    handleSetActiveEventsRange(swiper.activeIndex);
  }, []);

  useEffect(() => {
    if (swiperRef.current && activeEventsRange?.id) swiperRef.current?.swiper.slideTo(activeEventsRange?.id - 1)
  }, [activeEventsRange]);

  return (
    <Container>
      <Swiper
        ref={swiperRef}
        pagination
        slidesPerView={swiperParams.slidesPerView}
        modules={swiperParams.modules}
        speed={swiperParams.speed}
        navigation={swiperParams.navigation}
        onSlideChange={handleSlideChange}
      >
        {slides?.map(slide => (
          <SwiperSlide key={slide.id}>
          </SwiperSlide>
        ))}
      </Swiper>
      <DateContainer>
        <NumberText number={activeEventsRange.from} />
        &nbsp;&nbsp;
        <NumberText number={activeEventsRange.to} />
      </DateContainer>
    </Container>
  );
};

export default EventRange;