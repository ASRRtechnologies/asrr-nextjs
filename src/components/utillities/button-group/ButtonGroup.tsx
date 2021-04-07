/** @jsxImportSource @emotion/react */
import React from 'react';
import {ButtonGroupProps} from "@/utillities/button-group/types";
import styled from "@emotion/styled";
import {styles} from "@/styles/global";
import css from "@emotion/css";

const StyledButtonGroup = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  max-width: ${styles.maxWidth};
`

const ButtonsLeft = css`
  flex-direction: row;
  justify-content: flex-start;

  &:first-child {
    margin-right: 10px;
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
  justify-content: center;
`

const ButtonsSpaceBetween = css`
  flex-direction: row;
  justify-content: flex-end;

  &:first-child {
    margin-right: 10px;
  }
`

function ButtonGroup(props, {position = "right"}: ButtonGroupProps) {

    const renderStyles = () => {
        switch (position) {
            case "right":
                return ButtonsRight;
            case "left":
                return ButtonsLeft;
            case "center":
                return ButtonsCenter;
            case "space-between":
                return ButtonsSpaceBetween
        }
    }

    return (
        <div css={ButtonsCenter}>
            {props.children}
        </div>
    );
}

export default ButtonGroup;
