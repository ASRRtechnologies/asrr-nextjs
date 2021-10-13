import React from 'react';
import AspectRatio from '@/library/aspect-ratio/AspectRatio';
import { BaseShapeProps } from '@/library/shapes/types';

function Square(props: BaseShapeProps) {
  const { maxWidth, minWidth, children, style } = props;

  return (
    <AspectRatio maxWidth={maxWidth} minWidth={minWidth} x={1} y={1}>
      {children}
    </AspectRatio>
  );
}

export default Square;
