import styled from 'styled-components';

export const MenuView = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
`;

interface MenuIconProps {
  color: string;
}

export const MenuIcon = styled.a<MenuIconProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  margin: 30px 30px 0 0;
  font-size: 36px;
  color: ${(props) => props.color};
  z-index: 10;
`;

export const MenuLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 220px;
  height: 60px;
  font-size: 2rem;
  text-decoration: none;
`;

interface MenuListProps {
  bgColor: string;
  textColor: string;
}

export const MenuList = styled.ul<MenuListProps>`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  margin: 0;
  background-color: ${(props) => props.bgColor};
  border-bottom-left-radius: 50%;
  list-style: none;

  & > li {
    display: block;
    margin-bottom: 16px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  ${MenuLink} {
    color: ${(props) => props.textColor};
  }
`;

export const ModeBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 36px;
  height: 36px;
  margin-bottom: 100px;
  background-color: rgba(248, 248, 248, 0.4);
  border-radius: 50%;
  font-size: 24px;
  color: #fcfaee;
  z-index: 10;
`;
