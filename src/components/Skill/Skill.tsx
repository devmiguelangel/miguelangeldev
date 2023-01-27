import React from 'react';
import { useTheme } from 'styled-components';
// Components
import * as S from './Skill.styles';
import { Title } from '../shared';
// Styles
import 'devicon/devicon.min.css';

const Skill: React.FC = () => {
  const theme = useTheme();

  const colorTitleSkill = theme.mode === 'light' ? 'inherit' : theme.colors.mainSecondary;

  return (
    <S.View>
      <Title color={theme.colors.main}>Skills</Title>
      <br />

      <S.SkillView>
        <Title size="medium" color={colorTitleSkill}>
          Software Development
        </Title>
        <S.SkillBox>
          <i className="devicon-javascript-plain"></i>
          <i className="devicon-react-original"></i>
          <i className="devicon-graphql-plain"></i>
          <i className="devicon-python-plain"></i>
          <i className="devicon-nodejs-plain"></i>
        </S.SkillBox>
      </S.SkillView>

      <S.SkillView>
        <Title size="medium" color={colorTitleSkill}>
          Databases
        </Title>
        <S.SkillBox>
          <i className="devicon-mysql-plain"></i>
          <i className="devicon-postgresql-plain"></i>
          <i className="devicon-mongodb-plain"></i>
          <i className="devicon-apachekafka-original"></i>
        </S.SkillBox>
      </S.SkillView>

      <S.SkillView>
        <Title size="medium" color={colorTitleSkill}>
          CI / CD
        </Title>
        <S.SkillBox>
          <i className="devicon-docker-plain"></i>
          <i className="devicon-github-original"></i>
          <i className="devicon-argocd-plain"></i>
          <i className="devicon-kubernetes-plain"></i>
          <i className="devicon-amazonwebservices-original"></i>
        </S.SkillBox>
      </S.SkillView>

      <S.SkillView>
        <Title size="medium" color={colorTitleSkill}>
          Mobile
        </Title>
        <S.SkillBox>
          <i className="devicon-react-original"></i>
          <i className="devicon-swift-plain"></i>
        </S.SkillBox>
      </S.SkillView>
    </S.View>
  );
};

export default Skill;
