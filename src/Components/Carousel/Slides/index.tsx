import React from 'react';
import { SContainer, STextWrapper } from './style';
import { ImageProps } from 'Interface';
import Image from 'Components/Image';

interface SlideProps {
  element: ImageProps;
}

const Slide: React.FC<SlideProps> = ({ element }): JSX.Element => {
  const { alt, height, url, width, id } = element;
  return (
    <SContainer>
      <STextWrapper>
        <h1>Header {id}</h1>
        <p>A short paragraph with some descriptive text.</p>
      </STextWrapper>
      <picture>
        <source
          media="(max-width:640px)"
          srcSet={url}
          height={`${height / 3}px`}
          width={`${width / 3}px`}
        />
        <source
          media="(max-width:768px)"
          srcSet={url}
          height={`${height / 2}px`}
          width={`${width / 2}px`}
        />
        <Image
          src={url}
          alt={alt}
          height={`${height}px`}
          width={`${width}px`}
        />
      </picture>
    </SContainer>
  );
};

export default Slide;
