import React, { useState } from 'react';
import { useTheme } from 'styled-components';
// Components
import * as S from './Header.styles';
import Menu from '../Menu';
// Styles
import 'remixicon/fonts/remixicon.css';

interface HeaderProps {
  toggleTheme(): void;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const theme = useTheme();

  return (
    <S.Header isMenuOpen={isOpen}>
      <S.MenuIcon isMenuOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <i className="ri-close-line ri-2x"></i> : <i className="ri-menu-2-line ri-2x"></i>}
      </S.MenuIcon>

      {isOpen && (
        <>
          <Menu />

          <S.ModeIcon onClick={toggleTheme}>
            {theme.mode === 'light' ? <i className="ri-sun-fill ri-xl"></i> : <i className="ri-moon-fill ri-xl"></i>}
          </S.ModeIcon>
        </>
      )}
    </S.Header>
  );
};

export default Header;
