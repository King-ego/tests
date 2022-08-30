import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: 'Montserrat';
}

body {
  background-color: ${({ theme }) => theme.colors.background};
  color:${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.primary};
}
`;
