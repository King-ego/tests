import { render, screen } from '@testing-library/react';
import React from 'react';
import Flex from '.';

describe('render test', () => {
  const testId = 'ComponentFlex';

  it('child test props css align', async () => {
    render(<Flex Align="center" />);

    expect(screen.getByTestId(testId)).toHaveStyle('align-items:center;');
  });

  it('child test props css justify', async () => {
    render(<Flex Direction="column" />);

    expect(screen.getByTestId(testId)).toHaveStyle('flex-direction:column;');
  });

  it('test display render', async () => {
    render(<Flex />);

    expect(screen.getByTestId(testId)).toHaveStyle('display:flex;');
  });

  it('render child', async () => {
    const noneButton: string = 'click';
    const ElementHTML: React.FC = (): JSX.Element => (
      <button data-testid="button">{noneButton}</button>
    );
    render(
      <Flex>
        <ElementHTML />
      </Flex>
    );

    expect(screen.getByTestId('button')).toBeInTheDocument();
    expect(screen.getByText(noneButton)).toBeInTheDocument();
  });
});
