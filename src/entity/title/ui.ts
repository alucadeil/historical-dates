import styled from 'styled-components';

export const Header = styled.h1`
  position: relative;
  height: auto;
  max-width: 20rem;
  max-height: 6.75rem;
  color: ${({ theme }) => theme.colors.main};

  &::before {
    content: '';
    position: absolute;
    height: 6rem;
    width: .25rem;
    top: 50%;
    transform: translateY(-50%);
    left: -4rem;
    background: linear-gradient(rgba(56,119,238,1) 0%, rgba(239,93,168,1) 100%);

    @media (max-width: 450px) {
      display: none;
    }
  }

  @media (max-width: 450px) {
    max-width: 7rem;
    font-size: 1rem;
  }
`;