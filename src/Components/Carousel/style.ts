import styled, { css } from 'styled-components';

interface ICarouselSlide {
  active?: boolean;
}

interface ICarouselProps {
  currentSlide: number;
}

export const SCarouselWrapper = styled.div`
  display: flex;
  /* overflow: hidden; */
`;

export const SCarouselSlide = styled.div<ICarouselSlide>`
  flex: 0 0 auto;
  opacity: ${(props) => (props.active ? 0 : 1)};
  /* display: ${(props) => (props.active ? 'none' : 'block')}; */
  transition: all 0.5s ease;
  width: 100%;
`;

export const SCarouselSlides = styled.div<ICarouselProps>`
  display: flex;
  ${(props) =>
    props.currentSlide &&
    css`
      transform: translateX(-${props.currentSlide * 100}%);
    `};
  transition: all 0.5s ease;
`;
