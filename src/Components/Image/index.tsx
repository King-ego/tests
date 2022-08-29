import React from 'react';
import { Childer } from 'Interface';

interface PropsImageChild extends Childer {
  src: string;
  width: string | number;
  height: string | number;
  alt: string;
}

const Image: React.FC<PropsImageChild> = (props): JSX.Element => {
  const { alt, height, src, width } = props;
  return (
    <img className="img" src={src} alt={alt} width={width} height={height} />
  );
};

export default Image;
