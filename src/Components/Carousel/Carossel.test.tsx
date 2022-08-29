import Carousel from '.';
import { render, screen } from '@testing-library/react';

const props = [
  {
    id: '1',
    alt: 'não sei',
    url: 'https://placehold.jp/250x250.png/',
    width: 250,
    height: 250,
  },
  {
    id: '2',
    alt: 'não sei',
    url: 'https://placehold.jp/250x250.png/',
    width: 250,
    height: 250,
  },
  {
    id: '3',
    alt: 'não sei',
    url: 'https://placehold.jp/250x250.png/',
    width: 250,
    height: 250,
  },
  {
    id: '4',
    alt: 'não sei',
    url: 'https://placehold.jp/250x250.png/',
    width: 250,
    height: 250,
  },
];

describe('render carossel', () => {
  it('render lenght image', async () => {
    render(<Carousel Elements={props} />);
    expect((await screen.findAllByRole('img')).length).toEqual(props.length);
  });
});
