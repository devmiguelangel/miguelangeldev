import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
// Components
import Home from '../components/Home';
import Menu from '../components/Menu';
import AboutMe from '../components/AboutMe';
import { GlobalStyles, lightTheme, darkTheme } from '../components/styles';
// Styles
import '../assets/css/App.styl';
import 'remixicon/fonts/remixicon.css';

const App: React.FC = () => {
  const [theme, setTheme] = useState('light');

  const isDarkTheme = theme === 'dark';

  const toggleTheme = (): void => setTheme(isDarkTheme ? 'light' : 'dark');

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <>
        <GlobalStyles />
        <Menu toggleTheme={toggleTheme} />
        <Home />
        <AboutMe />
      </>
    </ThemeProvider>
  );
};

export default App;
