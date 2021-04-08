import React from 'react';
import AspectRatio from "@/utillities/aspect-ratio/AspectRatio";
import {BaseShapeProps} from "@/utillities/shapes/types";

function Circle(props: BaseShapeProps) {

    const {maxWidth, minWidth, children, style} = props;

    const circleStyles = {...style, ...{borderRadius: "50%"}}

    return (
        <AspectRatio maxWidth={maxWidth} minWidth={minWidth} x={1} y={1} style={circleStyles}>
            {children}
        </AspectRatio>
    );
}

export default Circle;
