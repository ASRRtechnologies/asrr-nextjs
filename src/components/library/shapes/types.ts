import { AspectRatioProps } from '@/library/aspect-ratio/types';

/**
 * Inherits AspectRatio props except for x and y which are set inside component
 */
export interface BaseShapeProps extends Omit<AspectRatioProps, 'x' | 'y'> {

}
