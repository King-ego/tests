import { render, screen } from '@testing-library/react';
import React from 'react';
import Image from './';

// test('render image', async () => {
//   const url = 'https://placehold.jp/250x250.png';
//   render(<Image alt="qualquer coisa" height="500px" width="500px" src={url} />);

//   const scd = screen.getAllByRole('img');
//   expect(scd).not.toBeNull();
// });
describe('render image', () => {
  it('render', async () => {
    const url = 'https://placehold.jp/250x250.png';
    const alt_text = 'qualquer coisa';

    render(<Image alt={alt_text} height="500px" width="500px" src={url} />);

    screen.getByAltText(alt_text);
    await screen.findByRole('img');
  });
});
