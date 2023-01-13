import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
// Components
import Home from '../components/Home';
import Menu from '../components/Menu';
import '../assets/css/App.styl';
// Styles
import 'remixicon/fonts/remixicon.css';
import { GlobalStyles, lightTheme, darkTheme } from '../components/styles';

const App: React.FC = () => {
  const [theme, setTheme] = useState('light');
  const isDarkTheme = theme === 'dark';
  const toggleTheme = () => setTheme(isDarkTheme ? 'light' : 'dark');

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <>
        <GlobalStyles />
        <Menu />
        <Home />
      </>
    </ThemeProvider>
  );
};

export default App;
