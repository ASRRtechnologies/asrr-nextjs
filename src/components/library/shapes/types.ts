import { AspectRatioProps } from '@/library/aspect-ratio/types';

/**
 * Inherits AspectRatio props except for x and y which are set inside component
 */
export type BaseShapeProps = Omit<AspectRatioProps, 'x' | 'y'>;
