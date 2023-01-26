import React, { useState } from 'react';
// Components
import * as S from './Header.styles';
import Menu from '../Menu';
// Styles
import 'remixicon/fonts/remixicon.css';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Header isOpenMenu={isOpen}>
      <S.MenuIcon onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <i className="ri-close-line ri-2x"></i> : <i className="ri-menu-2-line ri-2x"></i>}
      </S.MenuIcon>

      {isOpen && (
        <>
          <Menu />

          <S.ModeIcon>
            <i className="ri-moon-fill ri-xl"></i>
          </S.ModeIcon>
        </>
      )}
    </S.Header>
  );
};

export default Header;
