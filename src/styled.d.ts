import 'styled-components';

export interface ITheme {
  main: string;
  mainSecondary: string;
  primary: string;
  secondary: string;
  dimmed: string;
  white: string;
  whiteSecondary: string;
  black: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    mode: 'light' | 'dark';
    colors: ITheme;
  }
}
