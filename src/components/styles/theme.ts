import { createGlobalStyle } from 'styled-components';
import * as colors from './colors';

export interface IThemeProps {
  mode: 'light' | 'dark';
  main: string;
  bgPrimary: string;
  bgSecondary: string;
  textPrimary: string;
  textSecondary: string;
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
    background: ${({ theme }: IGlobalThemeProps) => theme.bgPrimary};
    color: ${({ theme }: IGlobalThemeProps) => theme.textPrimary};
    /* transition: background 0.2s ease-in, color 0.2s ease-in; */
  }
`;

const defaultTheme = {
  main: colors.MAIN,
};

export const lightTheme: IThemeProps = {
  mode: 'light',
  bgPrimary: colors.MAIN_LIGHT,
  bgSecondary: colors.MAIN_DARK,
  textPrimary: colors.TEXT_DARK,
  textSecondary: colors.TEXT_LIGHT,
  ...defaultTheme,
};

export const darkTheme: IThemeProps = {
  mode: 'dark',
  bgPrimary: colors.MAIN_DARK,
  bgSecondary: colors.MAIN_LIGHT,
  textPrimary: colors.TEXT_LIGHT,
  textSecondary: colors.TEXT_DARK,
  ...defaultTheme,
};
