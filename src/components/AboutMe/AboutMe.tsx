import React from 'react';
// Components
import GHActionsLogo from './GHActionsLogo';
import AWSLogo from './AWSLogo';
import { AboutView, Picture, AboutText, CVLink, SkillBox, SkillGroup } from './About.styles';
import 'devicon/devicon.min.css';

const AboutMe: React.FC = () => {
  return (
    <AboutView id="about">
      <h1>About me</h1>

      <Picture>
        <img src="/images/photo.jpg" alt="photo_me" />
      </Picture>

      <AboutText>
        Passionate Software Engineer & Product Designer for 8+ years, working with Python / JavaScript / ReactJS, new
        technology and sports enthusiast
      </AboutText>

      <CVLink href="/resume.pdf" target="_blank">
        Download CV
      </CVLink>

      <h1>Skills</h1>

      <SkillBox>
        <h2>Software development</h2>

        <SkillGroup>
          <i className="devicon-javascript-plain"></i>
          <i className="devicon-react-plain"></i>
          <i className="devicon-graphql-plain"></i>
          <i className="devicon-python-plain"></i>
          <i className="devicon-nodejs-plain"></i>
        </SkillGroup>
      </SkillBox>

      <SkillBox>
        <h2>Databases</h2>

        <SkillGroup>
          <i className="devicon-mysql-plain"></i>
          <i className="devicon-postgresql-plain"></i>
          <i className="devicon-mongodb-plain"></i>
          <i className="devicon-apachekafka-plain"></i>
        </SkillGroup>
      </SkillBox>

      <SkillBox>
        <h2>CI / CD</h2>

        <SkillGroup>
          <i className="devicon-docker-plain"></i>
          <GHActionsLogo />
          <i className="devicon-argocd-plain"></i>
          <i className="devicon-kubernetes-plain"></i>
          <AWSLogo />
        </SkillGroup>
      </SkillBox>

      <SkillBox>
        <h2>Mobile</h2>

        <SkillGroup>
          <i className="devicon-react-plain"></i>
          <i className="devicon-swift-plain"></i>
        </SkillGroup>
      </SkillBox>
    </AboutView>
  );
};

export default AboutMe;
