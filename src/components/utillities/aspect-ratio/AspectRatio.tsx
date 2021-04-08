import React from 'react';
import styled from "@emotion/styled";
import {AspectRatioComponent, AspectRatioProps, AspectRatioWrapper} from "@/utillities/aspect-ratio/types";

/**
 * Takes in x and y aspect-ratio and returns a height in percentage;
 * @param {int} x
 * @param {int} y
 */
const calculateAspectRatio = (x: number, y: number): string => `${(y / x) * 100}%`

const StyledAspectRatioWrapper = styled.div`
  display: block;
  max-width: ${(props: AspectRatioWrapper) => props.maxWidth ? `${props.maxWidth}px` : "100%"};
  min-width: ${(props) => props.minWidth ? props.minWidth : 0};
  width: 100%;
  overflow: hidden;
`

const StyledAspectRatioComponent = styled.div`
  display: block;
  width: 100%;
  padding-bottom: ${(props: AspectRatioComponent) => calculateAspectRatio(props.x, props.y)};
  position: relative;
`

//Styles which are injected
const injectedChildrenStyles = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%"
}

/**
 * Returns modified child component with injected styles
 * @param
 * @default React.Element
 */
const injectStylesInChildComponent = (children: React.ReactElement): React.ReactElement => {
    //Merge the children styles with the injected children styles
    const mergedChildrenStyles = {...injectedChildrenStyles, ...children.props.style}

    return React.cloneElement(children, {style: mergedChildrenStyles})
}

function AspectRatio(props: AspectRatioProps) {

    const {maxWidth, minWidth, x, y, children, ...other} = props;

    return (
        <StyledAspectRatioWrapper maxWidth={maxWidth} minWidth={minWidth}>
            <StyledAspectRatioComponent x={x} y={y} {...other}>
                {props.children && injectStylesInChildComponent(props.children)}
            </StyledAspectRatioComponent>
        </StyledAspectRatioWrapper>
    );
}

export default AspectRatio;
