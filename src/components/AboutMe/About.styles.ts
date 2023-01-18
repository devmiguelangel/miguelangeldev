import styled from 'styled-components';
import { colors, devices } from '../styles';

export const AboutView = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  /* height: 100vh; */
  padding: 6rem 0 2rem 0;
`;

export const AboutBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${devices.laptop} {
    flex-direction: row;
    align-items: center;
    width: 80%;
  }

  @media ${devices.laptopL} {
    width: 70%;
  }
`;

export const Picture = styled.picture`
  min-width: 280px;
  width: 280px;
  height: 280px;
  margin: 10px 0 40px 0;

  & > img {
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  @media ${devices.laptop} {
    margin: 0;
  }
`;

export const AboutTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;

  @media ${devices.tablet} {
    width: 90%;
  }

  @media ${devices.laptop} {
    align-items: flex-start;
    width: auto;
    margin-left: 50px;
  }
`;

export const AboutText = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  color: ${(props) => props.theme.textPrimary as string};
  text-align: center;

  @media ${devices.laptop} {
    font-size: 1.25rem;
    text-align: left;
  }
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

  @media ${devices.laptop} {
    width: 160px;
    padding: 10px 0;
    font-size: 1rem;
  }
`;

export const SkillView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media ${devices.laptop} {
    margin-top: 40px;
  }
`;

export const SkillBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media ${devices.laptop} {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin-bottom: 20px;
  padding: 0 0 30px 0;
  background-color: ${(props) => (props.theme.mode === 'light' ? '#f4f4f9' : 'rgba(54, 66, 89, 0.2)')};
  border-radius: 5px;

  & > h2 {
    color: ${(props) => props.theme.mode === 'dark' && '#90A959'};
  }

  @media ${devices.laptop} {
    width: 320px;
    margin-bottom: 0;
  }
`;

export const Skill = styled.div`
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
