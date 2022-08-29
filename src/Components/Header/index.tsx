import React from 'react';
import { Childer } from '../../Interface';
import Carousel from 'Components/Carousel';

const Header: React.FC<Childer> = (): JSX.Element => {
  const images = [
    {
      id: '1',
      url: 'https://placehold.jp/250x250.png',
      width: 250,
      height: 250,
      alt: 'img',
    },
    {
      id: '2',
      url: 'https://placehold.jp/250x250.png',
      width: 250,
      height: 250,
      alt: 'img',
    },
    {
      id: '3',
      url: 'https://placehold.jp/250x250.png',
      width: 250,
      height: 250,
      alt: 'img',
    },
    {
      id: '4',
      url: 'https://via.placeholder.com/250/3D1D73/ffffff',
      width: 250,
      height: 250,
      alt: 'img',
    },
  ];
  return (
    <div>
      Diego
      <div>
        <Carousel Elements={images} />
      </div>
    </div>
  );
};

export default Header;
