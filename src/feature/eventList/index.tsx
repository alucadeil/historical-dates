import Event from 'entity/event';
import { Container } from './ui';
import { gsap } from 'gsap';
import ArrowButton from 'entity/arrowButton';
import { useLayoutEffect, useRef } from 'react';
import { Swiper } from 'swiper/react';
import { swiperParams } from './model';

const EventList = () => {

  const containerRef = useRef<HTMLDivElement | null>(null);
  const contextRef = useRef<gsap.Context | null>(null);

  useLayoutEffect(() => {
    contextRef.current = gsap.context(() => {}, containerRef);
    return () => {
      contextRef.current?.revert();
    }
  }, []);

  useLayoutEffect(() => {
    gsap.fromTo(containerRef.current, 
      {
        opacity: 0,
      },
      {
        opacity: 1,
        display: 'flex',
        duration: 1,
      })
  }, [])

  return (
    <Container ref={containerRef}>
      <ArrowButton className="prev" isLeft />
      <Swiper
        modules={swiperParams.modules}
        navigation={swiperParams.navigation}
        slidesPerView={swiperParams.slidesPerView}
        spaceBetween={swiperParams.slidesPerView}
        breakpoints={swiperParams.breakpoints}
      >
      </Swiper>
      <ArrowButton className="next" />
    </Container>
  )
};

export default EventList;
