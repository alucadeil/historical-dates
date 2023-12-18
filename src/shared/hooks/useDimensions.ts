import { useRef, useState, useEffect, MutableRefObject } from "react";

export interface IDimensions {
  width: number;
  height: number;
}

const initialState = { width: 0, height: 0 };

export const useDimensions = (ref: MutableRefObject<HTMLElement | null>) => {
  const [dimensions, setDimensions] = useState<IDimensions>(initialState);
  const resizeObserverRef = useRef(null);

  useEffect(() => {
    resizeObserverRef.current = new ResizeObserver((entries = []) => {
      entries.forEach((entry) => {
        const { width, height } = entry.contentRect;
        setDimensions({ width, height });
      });
    });
    if (ref.current) resizeObserverRef.current.observe(ref.current);
    return () => {
      if (resizeObserverRef.current) resizeObserverRef.current.disconnect();
    };
  }, [ref]);
  return dimensions;
};