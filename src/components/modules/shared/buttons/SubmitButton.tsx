import {ButtonProps} from "@/modules/shared/buttons/types";
import React from "react";
import styled from "@emotion/styled";
import {css} from "@emotion/react";

const StyledButton = styled("button")<ButtonProps>`
  ${props => props.mode === "darkmode" && css`
    background-color: ${props.theme.button.darkmode.background};
  `}
  ${props => props.mode === "dark" && css`
    background-color: ${props.theme.button.dark.background};
  `}
  ${props => props.mode === "light" && css`
    background-color: ${props.theme.button.light.background};
  `}
  &:hover {
    ${props => props.mode === "darkmode" && css`
      border-color: ${props.theme.button.darkmode.border};
    `}

    ${props => props.mode === "dark" && css`
      border-color: ${props.theme.button.dark.border};
    `}

    ${props => props.mode === "light" && css`
      border-color: ${props.theme.button.light.border};
    `}
  }
`

const SubmitButton = (props: ButtonProps) => {
    return (
        <StyledButton {...props}>
            <p>{props.title}</p>
        </StyledButton>
    )
}
export default SubmitButton;
