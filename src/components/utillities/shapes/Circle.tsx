import React from 'react';
import styled from "@emotion/styled";
import {CircleProps} from "@/utillities/shapes/types";
import {minWidth} from "@material-ui/system";

const StyledCircleWrapper = styled.div`
  border-radius: 50%;
  width: 100%;
  display: block;
  overflow: hidden;
`

const StyledCircle = styled.div`
  display: block;
  width: 100%;
  max-width: ${(props: CircleProps) => props.maxWidth ? props.maxWidth : "100%"};
  min-width: ${(props: CircleProps) => props.minWidth ? props.minWidth : "100%"};
  padding-bottom: 100%;
  border-radius: 50%;
`

function Circle(props: CircleProps) {
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
