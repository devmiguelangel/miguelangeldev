import styled from 'styled-components';
import { Title } from '../shared/Title/Title.styles';

export const HomeView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  & ${Title} {
    width: 90%;
  }
`;
