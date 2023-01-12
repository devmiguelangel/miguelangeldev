import React from 'react';
// Components
import { HomeView, TitleName, TitleCareer } from './Home.styles';

const Home = () => {
  return (
    <HomeView>
      <p>
        Hi,
        <br />
        I&apos;m <TitleName>Miguel Angel</TitleName>
        <br />
        <TitleCareer>
          Software Engineer <br /> & Product Designer
        </TitleCareer>
      </p>
    </HomeView>
  );
};

export default Home;
