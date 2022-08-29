import { render, screen } from '@testing-library/react';
import Slides from '.';

const props = {
  id: '1',
  alt: 'não sei',
  url: 'https://placehold.jp/250x250.png/',
  width: 250,
  height: 250,
};

describe('render slides', () => {
  it('test render components', async () => {
    render(<Slides element={props} />);

    expect(await screen.findByText(`Header ${props.id}`)).toBeInTheDocument();
  });

  it('test render image', async () => {
    render(<Slides element={props} />);
    expect(await screen.findByRole('img')).toBeInTheDocument();
  });
});
