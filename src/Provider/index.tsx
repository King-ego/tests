import React from 'react';
import { Childer } from 'Interface';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { ProviderAplicationTheme } from './SwitchTheme';

interface PropsProvider extends Childer {
  theme: DefaultTheme;
}

const Provider: React.FC<PropsProvider> = ({
  children,
  theme,
}): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <ProviderAplicationTheme>{children}</ProviderAplicationTheme>
    </ThemeProvider>
  );
};

export default Provider;
