import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;

    color-scheme: light dark;
    /* color: rgba(255, 255, 255, 0.87) */

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  body {
    display: flex;
    flex-direction: column;
    // place-items: center;
    // min-width: 320px;
    min-height: 100vh;
    margin: 0;
    background: ${({ theme }) => theme.main};
    color: ${({ theme }) => theme.secondary};
    /* transition: background 0.2s ease-in, color 0.2s ease-in; */
  }
`;

export const lightTheme = {
  main: '#FFFDF7',
  secondary: '#1A202C',
};

export const darkTheme = {
  main: '#1A202C',
  secondary: '#FFFDF7',
};
