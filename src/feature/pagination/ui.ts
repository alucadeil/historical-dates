import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  
  position: absolute;
  top: 0;
  left: 0;

  height: 100%;
  width: 100%;

  @media (max-width: 450px) {
    display: none;
  }
`;

export const Circle = styled.div`
  width: 530px;
  height: 530px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.circle};
  top: 205px;
  position: relative;
  z-index: 10;
  overflow: visible;

  @media (max-width: 1024px) {
    top: 110px;
  }

  @media (max-width: 768px) {
    height: 350px;
    width: 350px;
  }
  
  @media (max-width: 600px) {
    height: 300px;
    width: 300px;
  }

  @media (max-width: 450px) {
    display: none;
  }
`;

export const PointButton = styled.button`
 position: absolute;
  width: 6px;
  height: 6px;
  background-color: ${({ theme }) => theme.colors.main};
  border: none;
  border-radius: 50%;
  padding: 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: visible;
`;

export const PointIndex = styled.span`
  position: absolute;
  width: 0;
  height: 0;
  background-color: #F4F5F9;
  border: 1px solid rgba(48, 62, 88, .5);
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.main};
`;

export const PointTitle = styled.span`
  position: absolute;
  top: 50%;
  left: calc(56px + 20px);
  transform: translateY(-50%);
  font-weight: 700;
  line-height: 30px;
  opacity: 0;
  display: none;
  color: ${({ theme }) => theme.colors.main};
`;