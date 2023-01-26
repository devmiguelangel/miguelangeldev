import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  width: 100%;
  height: auto;
  background-color: beige;
  z-index: 1;
`;

export const Nav = styled.nav`
  display: flex;
  width: 100%;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-color: #40d783;
  list-style: none;
  border-bottom-left-radius: 187px;

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
