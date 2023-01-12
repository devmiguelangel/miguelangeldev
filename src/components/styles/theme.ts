import { createGlobalStyle } from 'styled-components';
import colors from './colors';

interface IThemeProps {
  bg: string;
  text: string;
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

export const lightTheme = {
  bg: colors.bg.light,
  text: colors.text.light,
};

export const darkTheme = {
  bg: '#121620',
  text: '#f1f1f1',
};
