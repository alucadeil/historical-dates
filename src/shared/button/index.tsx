import { FC, PropsWithChildren } from 'react';
import { StyledButton } from './ui';

interface IButton {
  isLeft?: boolean;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}

const Button: FC<PropsWithChildren<IButton>> = ({ isLeft, disabled, className, onClick, children }) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onClick?.();
  }
  
  return (
    <StyledButton className={className} disabled={disabled} $isLeft={isLeft} onClick={handleClick}>
      {children}
    </StyledButton>
  )
};

export default Button;
