import styled from 'styled-components';

export const Nav = styled.nav`
  /* position: absolute; */
  display: flex;
  width: 100%;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* height: 100vh; */
  margin: 0;
  padding: 0;
  list-style: none;

  & > li {
    margin-bottom: 16px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 220px;
  padding: 11px 0;
  font-size: 2rem;
  font-weight: 300;
  color: white;
  text-decoration: none;
`;
