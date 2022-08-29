import React from 'react';
import { SCarouselSlide, SCarouselSlides, SCarouselWrapper } from './style';
import { Childer, ImageProps } from 'Interface';
import Slides from './Slides';

interface IProps extends Childer {
  Elements: ImageProps[];
}

const Carousel: React.FC<IProps> = ({ Elements }): JSX.Element => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  function moveSlide(direction: 'right' | 'left'): void {
    const moving = {
      right: (currentSlide + 1) % Elements.length,
      left: (currentSlide - 1 + Elements.length) % Elements.length,
    };

    setCurrentSlide(moving[direction]);
  }

  return (
    <div>
      <SCarouselWrapper>
        <SCarouselSlides currentSlide={currentSlide}>
          {Elements.map((element, index) => (
            <SCarouselSlide
              active={currentSlide === index - 1}
              key={element.id}
            >
              <Slides element={element} />
            </SCarouselSlide>
          ))}
        </SCarouselSlides>
      </SCarouselWrapper>
      <button onClick={() => moveSlide('left')}>Left</button>
      <button onClick={() => moveSlide('right')}>Right</button>
    </div>
  );
};

export default Carousel;
