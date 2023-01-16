import React, { useState, useLayoutEffect } from 'react';
import { useTheme } from 'styled-components';
// Components
import { MenuView, MenuIcon, MenuList, MenuLink, ModeBox } from './Menu.styles';
// Interfaces
import { sizes, IThemeProps } from '../styles';

interface MenuProps {
  toggleTheme(): void;
}

const Menu: React.FC<MenuProps> = ({ toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [size, setSize] = useState(document.documentElement.clientWidth);

  const theme = useTheme() as IThemeProps;

  useLayoutEffect(() => {
    const updateSize = (): void => {
      // console.log(document.documentElement.clientWidth);
      setSize(document.documentElement.clientWidth);
    };

    window.addEventListener('resize', updateSize);

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <MenuView>
      <MenuIcon isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <i className="ri-close-line"></i> : <i className="ri-menu-2-fill"></i>}
      </MenuIcon>

      {isOpen && (
        <MenuList>
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
        <ModeBox textColor={size >= sizes.tablet ? theme.textPrimary : ''} onClick={toggleTheme}>
          <i className={theme.mode === 'light' ? 'ri-sun-fill' : 'ri-moon-fill'}></i>
        </ModeBox>
      )}
    </MenuView>
  );
};

export default Menu;
