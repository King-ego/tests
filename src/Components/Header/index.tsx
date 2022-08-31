import React from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import { Childer } from '../../Interface';

import Carousel from 'Components/Carousel';
import Container from 'Components/Container';
import Flex from 'Common/Layout/Flex';
import { ColorContainer } from './style';

interface PropsHeader extends Childer {
  toggleTheme(): void;
}

const Header: React.FC<PropsHeader> = ({ toggleTheme }): JSX.Element => {
  const theme = React.useContext(ThemeContext);

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
      url: 'https://placehold.jp/250x250.png',
      width: 250,
      height: 250,
      alt: 'img',
    },
  ];
  // const [checked, setChecked] = React.useState(false);
  return (
    <ColorContainer data-testid="Switchbackground">
      <span> Diego</span>

      <Container>
        <Flex Align="center" Justify="space-between">
          hghhg
          <Switch
            data-testid="switch"
            checked={theme?.title === 'light'}
            onChange={() => toggleTheme()}
            uncheckedIcon={false}
            checkedIcon={false}
            height={10}
            width={40}
            handleDiameter={20}
            offColor={theme?.colors.primary}
            onColor={theme?.colors.secundary}
          />
        </Flex>
      </Container>
      <div>
        <Carousel Elements={images} />
      </div>
    </ColorContainer>
  );
};

export default Header;
