import React from 'react';
// Components
import Title from '../shared/Title';

const AboutMe: React.FC = () => {
  return (
    <section>
      <Title>About me</Title>

      <picture>
        <img src="/images/vite.svg" alt="my-photo" />
      </picture>
    </section>
  );
};

export default AboutMe;
