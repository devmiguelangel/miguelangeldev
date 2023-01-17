import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useTheme } from 'styled-components';
// Components
import { MenuView, MenuIcon, MenuList, MenuLink, ModeIcon } from './Menu.styles';
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

  useEffect(() => {
    if (size >= sizes.tablet) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [size]);

  return (
    <MenuView isOpen={isOpen}>
      <MenuIcon isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} data-testid="menu-icon">
        {isOpen ? <i className="ri-close-line"></i> : <i className="ri-menu-2-fill"></i>}
      </MenuIcon>

      {isOpen && (
        <MenuList>
          <li>
            <MenuLink href="#home">home</MenuLink>
          </li>
          <li>
            <MenuLink href="#about">about me</MenuLink>
          </li>
          <li>
            <MenuLink href="#portfolio">portfolio</MenuLink>
          </li>
          <li>
            <MenuLink href="#contact">contact</MenuLink>
          </li>
        </MenuList>
      )}

      {isOpen && (
        <ModeIcon onClick={toggleTheme}>
          <i className={theme.mode === 'light' ? 'ri-sun-fill' : 'ri-moon-fill'}></i>
        </ModeIcon>
      )}
    </MenuView>
  );
};

export default Menu;
