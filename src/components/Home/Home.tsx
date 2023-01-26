import React from 'react';
// Components
import * as S from './Home.styles';
import Title from '../shared/Title';

const Home: React.FC = () => {
  return (
    <S.HomeView>
      <p>
        <Title>Hi,</Title>
        <br />

        <Title>I&apos;m </Title>
        <Title weight="bold">Miguel Angel</Title>

        <br />
        <Title weight="bold" color="#40D783">
          Software Engineer
          <br /> & Product Designer
        </Title>
      </p>
    </S.HomeView>
  );
};

export default Home;
