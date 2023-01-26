import styled from 'styled-components';

interface HeaderProps {
  isMenuOpen: boolean;
}

export const Header = styled.header<HeaderProps>`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${(props) => (props.isMenuOpen ? '100vh' : 'auto')};
  background-color: ${({ isMenuOpen, theme }) =>
    isMenuOpen ? (theme.mode === 'light' ? theme.colors.main : theme.colors.dimmed) : 'none'};
  border-bottom-left-radius: 187px;
  z-index: 1;
`;

interface MenuIconProps {
  isMenuOpen: boolean;
}

export const MenuIcon = styled.div<MenuIconProps>`
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
  color: ${({ isMenuOpen, theme }) =>
    !isMenuOpen && theme.mode === 'light' ? theme.colors.black : theme.colors.white};
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
  background-color: ${({ theme }) => (theme.mode === 'light' ? 'rgba(255, 253, 247, 0.4)' : 'rgba(26, 32, 44, 0.35)')};
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;
