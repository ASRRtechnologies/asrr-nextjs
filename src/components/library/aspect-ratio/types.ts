import { StandardProps } from '../index';
import React from 'react';

/**
 * Outer Aspect Ratio Wrapper
 * Needs only maxWidth and minWidth for it's width dimensions.
 */
export interface AspectRatioWrapper
  extends Omit<AspectRatioProps, 'x' | 'y'>,
    Omit<StandardProps, any> {}

/**
 * This interface belongs to the inner stylable component
 *  To let this component be styled it extends the StandardProps
 *  For the calculated height percentage it also expects x and y ratio
 */
export interface AspectRatioComponent
  extends Omit<AspectRatioProps, 'maxWidth' | 'minWidth'> {
  children?: React.ReactElement;
}

export interface AspectRatioProps extends StandardProps {
  /**
   * Min width in pixels
   */
  minWidth?: number;
  /**
   * Max width in pixels
   */
  maxWidth?: number;

  //This component should only accept one child
  children?: React.ReactElement;

  x: number;
  y: number;
}
