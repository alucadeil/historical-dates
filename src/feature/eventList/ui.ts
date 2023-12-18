import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  opacity: 0;
  display: none;
  align-items: center;
  justify-content: space-between;


  gap: 1rem;
  padding-inline: 1rem;

  .swiper-button-disabled {
    opacity: 0;
    pointer-events: none;
  }

  button {
    width: 2rem;
    height: 2rem;
    box-shadow: 0 0 0.75rem ${({ theme }) => theme.colors.shadow};
  }

  @media (max-width: 600px) {
    .swiper-slide-next {
        opacity: 0.4;
    }
  }

  @media (max-width: 450px) {
    padding-inline: 1rem;
    button {
      display: none;
    }
  }
`;
