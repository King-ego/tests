import React from 'react';
import { Childer } from 'Interface';
import { Content } from './style';

interface PropsContainer extends Childer {}

const Container: React.FC<PropsContainer> = (props): JSX.Element => {
  const { children } = props;
  return <Content>{children}</Content>;
};

export default Container;
