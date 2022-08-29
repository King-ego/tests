import React from 'react';

export interface Childer {
  children?: React.ReactNode;
}

export interface ImageProps {
  id: string;
  url: string;
  width: number;
  height: number;
  alt: string;
}
