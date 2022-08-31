import { render, screen } from '@testing-library/react';
import Provider from 'Provider';
import React from 'react';
import dark from 'Style/Themes/dark';

test('render test', () => {
  const testid = 'box';
  const JSXElement: React.FC = () => <div data-testid={testid}>Box</div>;
  render(
    <Provider theme={dark}>
      <JSXElement />
    </Provider>
  );

  expect(screen.getByTestId(testid)).toBeInTheDocument();
});
