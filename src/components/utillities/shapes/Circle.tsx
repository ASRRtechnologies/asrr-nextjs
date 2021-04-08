import React from 'react';
import styled from "@emotion/styled";
import {AspectRatioProps, CalculatedAspectRatio} from "@/utillities/shapes/types";

const StyledCircleWrapper = styled.div`
  border-radius: 50%;
  width: 100%;
  display: block;
  overflow: hidden;
`

const StyledCircle = styled.div`
  display: block;
  width: 100%;
  max-width: ${(props: AspectRatioProps) => props.maxWidth ? props.maxWidth : "100%"};
  min-width: ${(props) => props.minWidth ? props.minWidth : "100%"};
  border-radius: 50%;
`

/**
 * Takes in x and y aspect-ratio and returns a height in percentage;
 * @param {int} x
 * @param {int} y
 */
const calculateAspectRatio = (x: number, y: number): string => `${(y/x) * 100}%`

function Circle(props: AspectRatioProps) {
    const {maxWidth, minWidth} = props;

    return (
        <StyledCircleWrapper>
            <StyledCircle maxWidth={maxWidth} minWidth={minWidth} {...props}>
                {props.children}
            </StyledCircle>
        </StyledCircleWrapper>
    );
}

export default Circle;
