import React from 'react';
import Header from './Components/Header';
import { Global } from 'Style/Global';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import light from 'Style/Themes/light';
import dark from 'Style/Themes/dark';

import 'Style/CSS/index.css';

import usePersistedState from 'Utils/Hooks/usePersistedState';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  function toggleTheme() {
    setTheme(theme.title === 'light' ? dark : light);
  }
  return (
    <ThemeProvider theme={theme}>
      <Header toggleTheme={toggleTheme} />
      <Global />
    </ThemeProvider>
  );
}

export default App;
