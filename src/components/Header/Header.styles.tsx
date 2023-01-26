import styled from 'styled-components';

interface HeaderProps {
  isOpenMenu: boolean;
}

export const Header = styled.header<HeaderProps>`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${(props) => (props.isOpenMenu ? '100vh' : 'auto')};
  background-color: ${(props) => (props.isOpenMenu ? '#40d783' : 'none')};
  border-bottom-left-radius: 187px;
  z-index: 1;
`;

export const MenuIcon = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  width: 44px;
  height: 44px;
  margin-top: 30px;
  margin-right: 30px;
  color: inherit;
  cursor: pointer;
  z-index: 2;
`;

export const ModeIcon = styled.div`
  position: absolute;
  bottom: 0;
  margin-bottom: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  background-color: rgba(26, 32, 44, 0.35);
  border-radius: 50%;
  color: #fffdf7;
  cursor: pointer;
`;
