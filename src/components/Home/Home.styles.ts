import styled from 'styled-components';
import { devices } from '../styles';

export const HomeView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  font-family: OpenSans;
  font-size: 2.25rem;

  @media ${devices.tablet} {
    font-size: 4rem;
  }

  @media ${devices.laptop} {
    font-size: 5rem;
  }
`;

export const TitleName = styled.span`
  font-weight: 700;
`;

export const TitleCareer = styled.span`
  font-weight: 600;
  color: #40d783;
`;
