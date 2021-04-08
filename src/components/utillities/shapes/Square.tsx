import React from 'react';
import AspectRatio from "@/utillities/aspect-ratio/AspectRatio";
import {BaseShapeProps} from "@/utillities/shapes/types";

function Square(props: BaseShapeProps) {

    const {maxWidth, minWidth, children, style} = props;

    return (
        <AspectRatio maxWidth={maxWidth} minWidth={minWidth} x={1} y={1} style={style}>
            {children}
        </AspectRatio>
    );
}

export default Square;
