import React from 'react';
// Components
import * as S from './Home.styles';
import Title from '../shared/Title';

const Home: React.FC = () => {
  return (
    <S.HomeView>
      <Title>
        Hi,
        <br />
        I&apos;m Miguel Angel
        <br />
        Software Engineer & Product Designer
      </Title>
    </S.HomeView>
  );
};

export default Home;
