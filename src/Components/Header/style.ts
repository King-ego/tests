import styled from 'styled-components';

export const ColorContainer = styled.div`
  border: 1px solid black;
  background-color: ${({ theme }) =>
    theme.title === 'light' ? '#333' : '#5f5'};
`;
