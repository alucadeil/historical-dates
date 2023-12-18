import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  min-height: 530px;

  padding-inline: 4rem;

  margin-bottom: 2.8rem;

  &::after {
    content: '';
    position: absolute;
    height: 1px;
    width: 100%;
    background-color: ${({ theme }) => theme?.colors?.line};
    left: 0;
    top: 50%;
  }

  .swiper-pagination {

    position: fixed;
    bottom: 1.6rem !important;
    display: none;
    left:10px;
    .swiper-pagination-bullet {
      background-color: ${({ theme }) => theme.colors.main};
    }
  }
  
  @media (max-width: 450px) {
    padding-inline: 1rem;
    min-height: auto;
    margin-bottom: 3.8rem;

    .swiper-pagination {
        display: block;
    }

    &::after {
      left: unset;
      top: unset;
      width: calc(100% - 2rem);
      bottom: -2.8rem;
    }
  }
`;

export const DateContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 10rem;
  font-weight: 700;
  color: ${({ theme }) => theme?.colors.purple};
  span:nth-child(2n) {
    color: ${({ theme }) => theme?.colors.pink}
  }

  @media (max-width: 450px) {
    position: static;
    left: unset;
    top: unset;
    transform: unset;
    font-size: 2.8rem;
  }
`;

export const Slide = styled.div`
  width: 530px;
  height: 530px;
`;