import styled from 'styled-components';

export const View = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding-top: 95px;
`;

export const Picture = styled.picture`
  display: block;
  width: 280px;
  height: 280px;
  margin: 40px 0;
  filter: drop-shadow(3px 4px 10px rgba(26, 32, 44, 0.4));

  & > img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
  }
`;

export const Introduce = styled.p`
  width: 90%;
  text-align: center;
`;
