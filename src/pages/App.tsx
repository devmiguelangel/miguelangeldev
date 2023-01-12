import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
// Components
import Home from '../components/Home';
import '../assets/css/App.styl';
// Styles
import { GlobalStyles, lightTheme, darkTheme } from '../components/styles';

const App = () => {
  const [theme, setTheme] = useState('light');
  const isDarkTheme = theme === 'dark';
  const toggleTheme = () => setTheme(isDarkTheme ? 'light' : 'dark');

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <>
        <GlobalStyles />
        <Home />
      </>
    </ThemeProvider>
  );
};

export default App;
