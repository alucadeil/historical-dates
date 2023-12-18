import { FC, useContext, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { IEventsRange } from 'shared/data';
import { CSSProperties } from 'styled-components';
import { PointButton, PointIndex, PointTitle } from './ui';
import { IDimensions } from 'shared/hooks/useDimensions';
import { EventsContext } from 'shared/context';

interface IPointWithPositionsProps {
  item: IEventsRange;
  index: number;
  circleDimensions: IDimensions;
  angleStep: number;
}

interface IPointProps {
  metadata: IEventsRange;
  index: number;
  style?: CSSProperties;
}

const startAnimation = (animation: () => void, context:gsap.Context) => {
  context.kill();
  context.add(animation);
};

const PointWithPositions: FC<IPointWithPositionsProps> = ({ item, index, circleDimensions, angleStep }) => {
  const angle = -Math.PI / 2 + angleStep * (index + 1) + angleStep / 2;
  const radius = (circleDimensions.width) / 2;
  const top = (circleDimensions.width - 6) / 2 + radius * Math.sin(angle);
  const left = (circleDimensions.width - 6) / 2 + radius * Math.cos(angle);

  return (
    <Point 
      index={index}
      metadata={item}
      style={{ top: `${top}px`, left: `${left}px` }}
    />
  );
};

const Point: FC<IPointProps> = ({ metadata, index, style }) => {
  const { data, eventIndex, handleSetActiveEventsRange } = useContext(EventsContext);
  const pointRef = useRef<HTMLButtonElement | null>(null);
  const pointIndexRef = useRef<HTMLSpanElement | null>(null);
  const pointLabelRef = useRef<HTMLSpanElement | null>(null);
  const isActive = eventIndex === index + 1
  const hoverCtx = useRef<gsap.Context | null>(null);
  const activeCtx = useRef<gsap.Context | null>(null);
  const rotationCtx = useRef<gsap.Context | null>(null);

  useLayoutEffect(() => {
    activeCtx.current = gsap.context(() => {}, pointRef);
    rotationCtx.current = gsap.context(() => {}, pointRef);
    return () => {
      activeCtx.current?.revert();
      rotationCtx.current?.revert()
    }
  }, []);

  useLayoutEffect(() => {
    if (!rotationCtx.current) return;
    const angleStepGradus = -360 + 60 * (eventIndex);
    
    rotationCtx.current.revert()
    rotationCtx.current.add(() => {
      gsap.to(pointRef.current, {
        rotation: angleStepGradus,
        duration: 0,
      });
    })
  }, [eventIndex]);

  useLayoutEffect(() => {
    if (!isActive && activeCtx.current) {
      startAnimation(() => {
        gsap.to(pointLabelRef.current, {
          opacity: 0,
          display: 'none',
          duration: 0,
        });
        gsap.to(pointIndexRef.current, {
          opacity: 0,
          display: 'none',
          duration: 0.4,
          width: 0,
          height: 0,
        });
      }, activeCtx.current);
    }

    if (isActive && activeCtx.current)
      startAnimation(() => {
        gsap.to(pointLabelRef.current, {
          opacity: 1,
          display: 'flex',
          duration: 0.4,
          delay: 0.6,
        });
        gsap.to(pointIndexRef.current, {
          opacity: 1,
          display: 'flex',
          duration: 0.4,
          width: '56px',
          height: '56px',
        });
      }, activeCtx.current);
  }, [isActive]);

  const handleMouseEnter = () => {
    if (isActive) return;
    hoverCtx.current = gsap.context(() => {
      gsap.to(pointIndexRef.current, {
        opacity: 1,
        display: 'flex',
        duration: 0.4,
        width: '56px',
        height: '56px',
      });
    }, pointRef)
  };

  const handleMouseLeave = () => {
    if (isActive) return;
    hoverCtx.current?.add(() => {
      gsap.to(pointIndexRef.current, {
        opacity: 0,
        display: 'none',
        duration: 0.4,
        width: '0',
        height: '0',
      })
    })
  };

  const handleClick = () => {
    if (!isActive && handleSetActiveEventsRange && data) {
      handleSetActiveEventsRange(index);
    }
  };

  return (
    <PointButton
      ref={pointRef}
      style={{ ...style, position: 'absolute' }}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <PointIndex ref={pointIndexRef}>{index + 1}</PointIndex>
      <PointTitle ref={pointLabelRef}>
          {metadata.name}
      </PointTitle>
    </PointButton>
  );
};

export default PointWithPositions;