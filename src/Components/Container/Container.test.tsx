import { render, screen } from '@testing-library/react';
import React from 'react';
import Container from '.';

//Custon test
expect.extend({
  toBeInRange(received: number, floor: number, ceiling: number) {
    const pass = received >= floor && received <= ceiling;
    if (pass) {
      return {
        message: () =>
          `expected ${received} not to be within range ${floor} - ${ceiling}`,
        pass: true,
      };
    } else {
      return {
        message: () =>
          `expected ${received} not to be within range ${floor} - ${ceiling}`,
        pass: false,
      };
    }
  },
});

describe('render container', () => {
  it('test container', async () => {
    const Div: React.FC = () => {
      return <button>ola</button>;
    };
    render(
      <Container>
        <Div></Div>
      </Container>
    );

    expect(await screen.findByRole('button')).toBeInTheDocument();
    expect(10).toBeInRange(1,45);
  });
});
