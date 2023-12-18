import { useContext, useLayoutEffect, useMemo, useRef } from 'react';
import { gsap } from 'gsap';
import { Circle, Container } from './ui';
import { useDimensions } from 'shared/hooks/useDimensions';
import { EventsContext } from 'shared/context';
import Point from './point';

const PaginationControl = () => {
  const { data, eventIndex } = useContext(EventsContext);
  
  const circleRef = useRef<HTMLDivElement | null>(null);
  const animateRef = useRef<gsap.Context | null>(null);
  const ctx = useRef<gsap.Context | null>(null);
  const circleDimensions = useDimensions(circleRef);
  const numItems = data!.length;
  const angleStep = useMemo(() => (360 / numItems) * (Math.PI / 180), []);

  useLayoutEffect(() => {
    const angleStepGradus = (360 / numItems);
    const angleDifference = eventIndex ? (angleStepGradus * eventIndex) : angleStepGradus ;
    animateRef.current = gsap.context(() => {
      gsap.to(circleRef.current, {
        rotation: 360 - angleDifference,
        duration: 1, 
      });
    });
  }, [eventIndex, angleStep]);

  useLayoutEffect(() => {
    animateRef.current = gsap.context(() => { }, circleRef);
    return () => animateRef.current?.revert();
  }, []);


  return (
    <Container>
      <Circle ref={circleRef}>
        {data && data.map((item, index) => <Point
          key={item.id}
          item={item}
          index={index}
          angleStep={angleStep}
          circleDimensions={circleDimensions}
        />)}
      </Circle>
    </Container>
  );
};

export default PaginationControl;