import React, { useState } from 'react';
import { useTheme } from 'styled-components';
// Components
import { MenuView, MenuIcon, MenuList, MenuLink, ModeBox } from './Menu.styles';
// Interfaces
import { IThemeProps } from '../styles';

interface MenuProps {
  toggleTheme(): void;
}

const Menu: React.FC<MenuProps> = ({ toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const theme = useTheme() as IThemeProps;

  return (
    <MenuView>
      <MenuIcon
        color={!isOpen && theme.mode === 'light' ? theme.text : theme.menuMobile.text}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <i className="ri-close-line"></i> : <i className="ri-menu-2-fill"></i>}
      </MenuIcon>
      {isOpen && (
        <MenuList bgColor={theme.menuMobile.bg} textColor={theme.menuMobile.text}>
          <li>
            <MenuLink href="#!">home</MenuLink>
          </li>
          <li>
            <MenuLink href="#!">about me</MenuLink>
          </li>
          <li>
            <MenuLink href="#!">portfolio</MenuLink>
          </li>
          <li>
            <MenuLink href="#!">contact</MenuLink>
          </li>
        </MenuList>
      )}
      {isOpen && (
        <ModeBox onClick={toggleTheme}>
          {theme.mode === 'light' && <i className="ri-sun-fill"></i>}
          {theme.mode === 'dark' && <i className="ri-moon-fill"></i>}
        </ModeBox>
      )}
    </MenuView>
  );
};

export default Menu;
