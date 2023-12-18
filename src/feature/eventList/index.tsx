import Event from 'entity/event';
import { Container } from './ui';
import { gsap } from 'gsap';
import ArrowButton from 'entity/arrowButton';
import { EventsContext } from 'shared/context';
import { useContext, useEffect, useLayoutEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { swiperParams } from './model';

const EventList = () => {
  const { activeEventsRange } = useContext(EventsContext);

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
  }, [activeEventsRange])

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
        {activeEventsRange?.events?.map((event) => (
          <SwiperSlide key={event.eventId} >
            <Event event={event} />
          </SwiperSlide>
        ))}
      </Swiper>
      <ArrowButton className="next" />
    </Container>
  )
};

export default EventList;
