import React from 'react';
import { Global } from 'Style/Global';
import { DefaultTheme } from 'styled-components';

import light from 'Style/Themes/light';
import dark from 'Style/Themes/dark';

import Header from './Components/Header';
import Provider from 'Provider';

import usePersistedState from 'Utils/Hooks/usePersistedState';

import 'Style/CSS/index.css';

const App: React.FC = (): JSX.Element => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  function toggleTheme() {
    setTheme(theme.title === 'light' ? dark : light);
  }
  return (
    <Provider theme={theme}>
      <Header toggleTheme={toggleTheme} />
      <Global />
    </Provider>
  );
};

export default App;
