import React from 'react';
// Components
import { MenuView, MenuIcon } from './Menu.styles';

const Menu: React.FC = () => {
  return (
    <MenuView>
      <MenuIcon>
        <i className="ri-menu-2-fill"></i>
      </MenuIcon>
    </MenuView>
  );
};

export default Menu;
