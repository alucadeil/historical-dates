import { Header } from 'entity/title/ui';
import styled from 'styled-components';

export const MainContainer = styled.div`
  position: relative;
  
  padding: 170px 0 104px;

  height: 100%;

  border-right: 1px solid ${({ theme }) => theme?.colors?.line};
  border-left: 1px solid ${({ theme }) => theme?.colors?.line};

  &::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 1px;
    background-color: ${({ theme }) => theme?.colors?.line};
    left: 50%;
    top: 0;
  }

  ${Header} {
    left: 4rem;
    margin-bottom: -100px;
  }
  
  @media (max-width: 450px) {
    height: 100vh;
    padding: 2rem 0 .5rem;

    &::before {
      display: none;
    }

    ${Header} {
      left: 1rem;
      margin-bottom: 2.8rem;
    }
  }
`;

export const RangesContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-height: 615px;

  padding-inline: 4rem;

  margin-bottom: 2.8rem;
  border: 1px red solid;

  &::after {
    content: '';
    position: absolute;
    height: 1px;
    width: 100%;
    background-color: ${({ theme }) => theme?.colors?.line};
    left: 0;
    top: 50%;
  }
`;