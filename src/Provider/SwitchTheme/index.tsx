import { Childer } from 'Interface';
import React, { createContext, FC, useContext, useState } from 'react';
import { DefaultTheme } from 'styled-components';

interface SwitchThemeProps {
  theme: DefaultTheme | undefined;
  setTheme: (c: DefaultTheme) => void;
}

const AplicationTheme = createContext<SwitchThemeProps>({
  theme: undefined,
  setTheme: () => {},
});

export const useAplicationTheme = () =>
  useContext<SwitchThemeProps>(AplicationTheme);

export const ProviderAplicationTheme: FC<Childer> = ({ children }) => {
  const [theme, setTheme] = useState<DefaultTheme>();
  return (
    <AplicationTheme.Provider value={{ theme, setTheme }}>
      {children}
    </AplicationTheme.Provider>
  );
};
