import { createGlobalStyle } from 'styled-components';
import colors from './colors';

export interface IThemeProps {
  mode: 'light' | 'dark';
  main: string;
  bg: string;
  text: string;
  menuMobile: {
    bg: string;
    text: string;
  };
}

interface IGlobalThemeProps {
  theme: IThemeProps;
}

export const GlobalStyles = createGlobalStyle`
  body {
    display: flex;
    flex-direction: column;
    // place-items: center;
    // min-width: 320px;
    min-height: 100vh;
    margin: 0;
    background: ${({ theme }: IGlobalThemeProps) => theme.bg};
    color: ${({ theme }: IGlobalThemeProps) => theme.text};
    /* transition: background 0.2s ease-in, color 0.2s ease-in; */
  }
`;

const defaultTheme = {
  main: colors.main,
};

export const lightTheme = {
  mode: 'light',
  ...defaultTheme,
  ...colors.light,
};

export const darkTheme = {
  mode: 'dark',
  ...defaultTheme,
  ...colors.dark,
};
