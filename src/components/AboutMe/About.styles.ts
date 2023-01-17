import styled from 'styled-components';
import { colors } from '../styles';

export const AboutView = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 6rem 0 2rem 0;
`;

export const Picture = styled.picture`
  width: 280px;
  height: 280px;
  margin: 40px 0;

  & > img {
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

export const AboutText = styled.p`
  width: 90%;
  font-size: 1.5rem;
  font-weight: 300;
  color: ${(props) => props.theme.textPrimary as string};
  text-align: center;
`;

export const CVLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  padding: 12px 0;
  background-color: ${(props) => props.theme.main as string};
  border-radius: 10px;
  font-size: 1.25rem;
  font-weight: 600;
  color: ${colors.TEXT_LIGHT};
  text-decoration: none;
`;

export const SkillBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85%;
  margin-bottom: 20px;
  padding: 0 0 30px 0;
  background-color: ${(props) => (props.theme.mode === 'light' ? '#f4f4f9' : 'rgba(54, 66, 89, 0.2)')};
  border-radius: 5px;

  & > h2 {
    color: ${(props) => props.theme.mode === 'dark' && '#90A959'};
  }
`;

export const SkillGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 48px 40px;

  & > i[class^='devicon'] {
    font-size: 3.75rem;
    color: ${(props) => (props.theme.mode === 'light' ? '#90a959' : '#F5E9E2')};
  }
`;
