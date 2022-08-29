import Header from './';
import { render, screen } from '@testing-library/react';

test('header render', async () => {
  render(<Header />);
  expect(await screen.findByText('Diego')).toBeInTheDocument();
});
