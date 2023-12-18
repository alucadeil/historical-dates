import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  left: 4rem;
  bottom: 295px;

  width: 6rem;

  font-size: .7rem;

  z-index: 1;

  color: ${({ theme }) => theme.colors.main};

  button {
    width: 2.5rem;
    height: 2.5rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    background-color: transparent;
    path {
      stroke: ${({ theme }) => theme.colors.main};
    }
  }

  & > span {
    display: inline-block;
    margin-bottom: 1rem;
  }

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .swiper-button-disabled {
    opacity: .5;
    pointer-events: none;
  }

  @media (max-width: 450px) {
    left: 1rem;
    bottom: .5rem;
    width: 3rem;

    & > span {
      margin-bottom: .5rem;
    }
    
    button {
      width: 1.25rem;
      height: 1.25rem;
    }

    button > svg {
      height: .3rem;
    }
  }

`;