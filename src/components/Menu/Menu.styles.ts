import styled from 'styled-components';
import { devices, colors } from '../styles';

export const MenuView = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  height: 100vh;

  @media ${devices.tablet} {
    top: 22px;
    right: 44px;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    height: auto;
  }
`;

interface MenuIconProps {
  isOpen: boolean;
}

export const MenuIcon = styled.a<MenuIconProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  margin: 30px 30px 0 0;
  font-size: 36px;
  color: ${(props) => (props.theme.mode === 'light' && !props.isOpen ? colors.TEXT_DARK : colors.TEXT_LIGHT)};
  z-index: 10;

  @media ${devices.tablet} {
    display: none;
  }
`;

export const MenuLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 220px;
  height: 60px;
  font-size: 2rem;
  text-decoration: none;

  @media ${devices.tablet} {
    width: 185px;
    height: 80px;
    font-size: 1.25rem;
  }
`;

export const MenuList = styled.ul`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  margin: 0;
  border-bottom-left-radius: 50%;
  list-style: none;

  & > li {
    display: block;
    margin-bottom: 16px;

    @media ${devices.tablet} {
      margin-bottom: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  ${MenuLink} {
    color: ${(props) => props.theme.textPrimary};

    @media ${devices.mobileS} {
      color: ${colors.TEXT_LIGHT};
    }

    @media ${devices.tablet} {
      font-weight: 300;
    }
  }

  @media ${devices.mobileS} {
    background-color: ${(props) => (props.theme.mode === 'light' ? colors.MAIN : colors.MAIN_DIMMED)};
  }

  @media ${devices.tablet} {
    position: initial;
    flex-direction: row;
    width: auto;
    height: auto;
    background-color: transparent;
    border-bottom-left-radius: 0;
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
  color: ${colors.TEXT_LIGHT};
  cursor: pointer;
  z-index: 10;

  @media ${devices.tablet} {
    display: flex;
    align-self: auto;
    margin-left: 40px;
    margin-bottom: 0;
    color: ${(props) => props.theme.textPrimary};
  }
`;
