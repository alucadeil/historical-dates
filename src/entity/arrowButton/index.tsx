import { FC, memo } from 'react';
import Button from 'shared/button'

interface IArrowButton {
  isLeft?: boolean;
  className?: string;
  onClick?: () => void;
}

const ArrowButton: FC<IArrowButton> = memo(({ isLeft, className, onClick }) => {
  return (
    <Button className={className} isLeft={isLeft} onClick={onClick}>
      <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L6 6L1 11" stroke="#3877EE" strokeWidth="2"/>
      </svg>
    </Button>
  );
});

export default ArrowButton;