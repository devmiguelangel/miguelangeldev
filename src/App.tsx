import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
// Components
import Home from './components/Home';
import Menu from './components/Menu';
// Styles
import { GlobalStyles, lightTheme, darkTheme } from './components/styles/theme';
import GlobalFonts from './components/styles/fonts';

const App: React.FC = () => {
  const [theme, setTheme] = useState('light');
  const isDarkTheme = theme === 'dark';
  const toggleTheme = (): void => setTheme(isDarkTheme ? 'light' : 'dark');

  return (
    <ThemeProvider theme={lightTheme}>
      <>
        <GlobalFonts />
        <GlobalStyles />

        <Menu />
        <Home />
      </>
    </ThemeProvider>
  );
};

export default App;
