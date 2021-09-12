import {AspectRatioProps} from "@/utillities/aspect-ratio/types";

/**
 * Inherits AspectRatio props except for x and y which are set inside component
 */
export interface BaseShapeProps extends Omit<AspectRatioProps, "x" | "y"> {

}
