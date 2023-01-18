import React from 'react';
// Components
import GHActionsLogo from './GHActionsLogo';
import AWSLogo from './AWSLogo';
import * as S from './About.styles';
// Styles
import 'devicon/devicon.min.css';

const AboutMe: React.FC = () => {
  return (
    <S.AboutView id="about">
      <h1>About me</h1>

      <S.AboutBox>
        <S.Picture>
          <img src="/images/photo.jpg" alt="photo_me" />
        </S.Picture>

        <S.AboutTextBox>
          <S.AboutText>
            Passionate Software Engineer & Product Designer for 8+ years, working with Python / JavaScript / ReactJS,
            new technology and sports enthusiast
          </S.AboutText>

          <S.CVLink href="/resume.pdf" target="_blank">
            Download CV
          </S.CVLink>
        </S.AboutTextBox>
      </S.AboutBox>

      <S.SkillView>
        <h1>Skills</h1>

        <S.SkillBox>
          <S.SkillCard>
            <h2>Software development</h2>

            <S.Skill>
              <i className="devicon-javascript-plain"></i>
              <i className="devicon-react-plain"></i>
              <i className="devicon-graphql-plain"></i>
              <i className="devicon-python-plain"></i>
              <i className="devicon-nodejs-plain"></i>
            </S.Skill>
          </S.SkillCard>

          <S.SkillCard>
            <h2>Databases</h2>

            <S.Skill>
              <i className="devicon-mysql-plain"></i>
              <i className="devicon-postgresql-plain"></i>
              <i className="devicon-mongodb-plain"></i>
              <i className="devicon-apachekafka-plain"></i>
            </S.Skill>
          </S.SkillCard>

          <S.SkillCard>
            <h2>CI / CD</h2>

            <S.Skill>
              <i className="devicon-docker-plain"></i>
              <GHActionsLogo />
              <i className="devicon-argocd-plain"></i>
              <i className="devicon-kubernetes-plain"></i>
              <AWSLogo />
            </S.Skill>
          </S.SkillCard>

          <S.SkillCard>
            <h2>Mobile</h2>

            <S.Skill>
              <i className="devicon-react-plain"></i>
              <i className="devicon-swift-plain"></i>
            </S.Skill>
          </S.SkillCard>
        </S.SkillBox>
      </S.SkillView>
    </S.AboutView>
  );
};

export default AboutMe;
