import React from 'react';
import { keyframes } from '@emotion/react';

declare type FadeDirection =
  | 'bottom-left'
  | 'bottom-right'
  | 'down'
  | 'left'
  | 'right'
  | 'top-left'
  | 'top-right'
  | 'up';

const up: FadeDirection = 'up';

//Animations settings
export const animationsSettings = (values: object, index?: number) => {
  return {
    direction: up,
    duration: index ? (index % 2 === 0 ? 1000 : 1500) : 1000, //If index is passed create delay effect otherwise use default value
    cascade: true,
    triggerOnce: true,
    ...values,
  };
};

export const cardAnimation = {
  duration: 1000,
  triggerOnce: true,
  cascade: false,
};

export const textAnimations = {
  direction: up,
  cascade: true,
  delay: 200,
  duration: 600,
  triggerOnce: true,
};

export const bannerAnimations = {
  delay: 200,
  duration: 1500,
  triggerOnce: true,
};

//Custom animations
export const zoomIn = keyframes`
  from {
    transform: scale(1);
  }

  to {
    transform: scale(1.2);
  }
`;
