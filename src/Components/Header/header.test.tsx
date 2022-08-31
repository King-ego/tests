import { fireEvent, render, screen } from '@testing-library/react';

import Header from './';

expect.extend({
  toBeMatch(received: boolean, expected: boolean) {
    const pass = received === expected;

    if (pass) {
      return {
        message: () => `received:${received}' is match expected:'${expected}'`,
        pass: true,
      };
    } else {
      return {
        message: () =>
          `received:'${received}' is not match expected:'${expected}'`,
        pass: false,
      };
    }
  },
});

describe('header render', () => {
  const mock = jest.fn();

  it('text screen', async () => {
    render(<Header toggleTheme={mock} />);
    expect(await screen.findByText('Diego')).toBeInTheDocument();
  });

  it('switch checkbox', async () => {
    render(<Header toggleTheme={mock} />);
    const testSwitchId = 'switch';
    const tesdDivId = 'Switchbackground';

    const checkbox = screen.getByTestId(testSwitchId) as HTMLInputElement;
    const div = screen.getByTestId(tesdDivId);

    checkbox.checked = true;
    fireEvent.click(checkbox);

    expect(checkbox.checked).toBeMatch(false);
    expect(div).toHaveStyle('background-color:#5f5');

    fireEvent.click(checkbox);

    expect(checkbox.checked).toBeMatch(true);
    expect(div).toHaveStyle('background-color:#333');
  });

  // it('click switch theme', async () => {
  //   render(<Header toggleTheme={moke} />);
  //   // const setItem = jest.fn();
  //   const getItem = jest.fn();

  //   Storage.prototype.getItem = getItem;
  //   // Storage.prototype.getItem = setItem;

  //   getItem.mockRestore();
  //   // setItem.mockRestore();

  //   fireEvent.click(screen.getByTestId('switch'));

  //   expect(getItem('theme')).toHaveBeenCalled();
  // });
});
