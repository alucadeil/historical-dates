import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 20rem;
  max-height: 6.75rem;
`;

export const Header = styled.h2`
  color: ${({ theme }) => theme?.colors?.blue};
  font-size: 1.25rem;
  margin-bottom: .75rem;
  @media (max-width: 450px) {
    font-size: .8rem;
  }
`;

export const Description = styled.p`
  color: ${({ theme }) => theme?.colors?.main};
  @media (max-width: 450px) {
    font-size: .7rem;
  }
`;