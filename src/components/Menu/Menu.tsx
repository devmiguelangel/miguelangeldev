import React from 'react';
// Components
import * as S from './Menu.styles';

const Menu: React.FC = () => {
  return (
    <S.Nav>
      <S.List>
        <li>
          <S.Link href="#!">home</S.Link>
        </li>
        <li>
          <S.Link href="#!">about</S.Link>
        </li>
        <li>
          <S.Link href="#!">portfolio</S.Link>
        </li>
        <li>
          <S.Link href="#!">contact</S.Link>
        </li>
      </S.List>
    </S.Nav>
  );
};

export default Menu;
