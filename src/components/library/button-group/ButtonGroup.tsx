/** @jsxImportSource @emotion/react */
import React from 'react';
import {ButtonGroupProps} from "@/library/button-group/types";

import styled from "@emotion/styled";
import {styles} from "@/library/styles/global_variabels";
import {css, SerializedStyles} from "@emotion/react";

const StyledButtonGroup = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  max-width: ${styles.maxWidth};
`

const ButtonsLeft = css`
  flex-direction: row;
  justify-content: flex-start;

  & > :first-child {
    margin-right: 20px;
  }
`

const ButtonsRight = css`
  flex-direction: row;
  justify-content: flex-end;

  &:first-child {
    margin-right: 10px;
  }
`

const ButtonsCenter = css`
  flex-direction: row;
  justify-content: space-evenly;
   
`

const ButtonsSpaceBetween = css`
  flex-direction: row;
  justify-content: flex-end;

  &:first-child {
    margin-right: 10px;
  }
`

function ButtonGroup(props: ButtonGroupProps) {
    const {position} = props;

    /**
     * Returns style for button group
     * @default left
     */
    const renderStyles = (): SerializedStyles => {
        switch (position) {
            case "right":
                return ButtonsRight;
            case "left":
                return ButtonsLeft;
            case "center":
                return ButtonsCenter;
            case "space-between":
                return ButtonsSpaceBetween
            default:
                return ButtonsLeft;
        }
    }

    return (
        <StyledButtonGroup css={renderStyles()}>
            {props.children}
        </StyledButtonGroup>
    );
}

export default ButtonGroup;
