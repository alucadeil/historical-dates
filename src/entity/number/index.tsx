import { FC, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface INumberTextProps {
  number: number;
}

const NumberText: FC<INumberTextProps> = ({ number }) => {
  const [value] = useState(number);
  const numberRef = useRef<HTMLSpanElement | null>(null);
  const gsapContextRef = useRef<gsap.Context | null>(null);

  useLayoutEffect(() => {
    gsapContextRef.current = gsap.context(() => {});
    return () => gsapContextRef.current?.revert();
  }, []);

  useLayoutEffect(() => {
    if (gsapContextRef.current) gsapContextRef.current.add(()=>{
      gsap.to(numberRef.current, {
          duration: 1,
          textContent: number,
          roundProps: 'textContent',
        })
    });
  }, [number]);

  return (
    <span ref={numberRef}>
      {value}
    </span>
  );
};

export default NumberText;