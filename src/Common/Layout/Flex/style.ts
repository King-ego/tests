import styled from 'styled-components';
import { PropsFlex } from '.';

export const ComponentFlex = styled.div<PropsFlex>`
  display: flex;
  flex-direction: ${({ Direction }) => Direction || 'row'};
  align-items: ${({ Align }) => Align || 'initial'};
  justify-content: ${({ Justify }) => Justify || 'initial'};
`;
