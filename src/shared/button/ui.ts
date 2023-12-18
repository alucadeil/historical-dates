import styled, { css } from 'styled-components';


interface IButtonProps {
  readonly $isLeft: boolean;
  readonly disabled: boolean;
}

export const StyledButton = styled.button<IButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  
  background-color: white;
  
  flex-shrink: 0;
  z-index: 1;

  border-radius: 50%;

  ${(props) => props.$isLeft && css`
    svg {
      transform: rotateZ(180deg);
    }
  `}

  @media (hover: hover) {
    &:hover {
      background-color: white;
      cursor: pointer;
    }
  }

  ${(props) => props.disabled && css`
    opacity: .5;
    @media (hover: hover) {
      &:hover {
        cursor: default;
      }
    }
  `}


`;