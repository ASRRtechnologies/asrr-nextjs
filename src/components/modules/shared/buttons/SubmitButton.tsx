import {NormalButtonProps, SubmitButtonProps} from "@/modules/shared/buttons/types";
import React from "react";
import styled from "@emotion/styled";
import css from "@emotion/css";

const StyledButton = styled("button")<SubmitButtonProps>`
  ${props => props.mode === "darkmode" && css`
    background-color: ${props.theme.button.darkmode.background};
  `}

  ${props => props.mode === "dark" && css`
    background-color: ${props.theme.button.dark.background};
  `}

  ${props => props.mode === "light" && css`
    background-color: ${props.theme.button.light.background};
  `}
`

const SubmitButton = (props: SubmitButtonProps) => {
    return (
        <StyledButton {...props}>
            <p>{props.title}</p>
        </StyledButton>
    )
}
export default SubmitButton;
