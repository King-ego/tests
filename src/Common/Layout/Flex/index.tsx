import { Childer } from 'Interface';
import type { Direction, Align, Justify } from './Type';
import React from 'react';

import { ComponentFlex } from './style';

export interface PropsFlex extends Childer {
  Direction?: Direction;
  Align?: Align;
  Justify?: Justify;
}

const Flex: React.FC<PropsFlex> = ({
  children,
  Direction,
  Align,
  Justify,
}): JSX.Element => {
  return (
    <ComponentFlex
      data-testid="ComponentFlex"
      Direction={Direction}
      Align={Align}
      Justify={Justify}
    >
      {children}
    </ComponentFlex>
  );
};

export default Flex;
