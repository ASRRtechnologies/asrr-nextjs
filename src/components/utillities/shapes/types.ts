import {StandardProps} from "@/utillities/global_types";

export interface CalculatedAspectRatio {
    height: string
}

export interface AspectRatioProps extends StandardProps{
    x: number,
    y: number,
    minWidth?: number
    maxWidth: number,
}
