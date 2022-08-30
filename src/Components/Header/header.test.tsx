import Header from './';
import { render, screen } from '@testing-library/react';

test('header render', async () => {
  const moke = jest.fn();
  render(<Header toggleTheme={moke} />);
  expect(await screen.findByText('Diego')).toBeInTheDocument();
});
