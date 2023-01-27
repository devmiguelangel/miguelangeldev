import React from 'react';
import { useTheme } from 'styled-components';
// Components
import * as S from './AboutMe.styles';
import { Title, Link, Text } from '../shared';

const AboutMe: React.FC = () => {
  const theme = useTheme();

  return (
    <S.View id="about">
      <Title color={theme.colors.main} weight="semibold">
        About me
      </Title>

      <S.Picture>
        <img src="/images/photo.jpg" alt="my snapshot" />
      </S.Picture>

      <S.Introduce>
        <Text size="large">
          Passionate Software Engineer & Product Designer for 8+ years, working with Python / JavaScript / ReactJS, new
          technology and sports enthusiast
        </Text>
      </S.Introduce>

      <Link href="/files/MiguelResume.pdf" target="_blank" style={{ marginTop: '40px' }}>
        Download CV
      </Link>
    </S.View>
  );
};

export default AboutMe;
