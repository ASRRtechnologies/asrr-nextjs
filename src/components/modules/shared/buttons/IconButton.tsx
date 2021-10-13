import {ButtonProps} from "@/modules/shared/buttons/types";
import React from "react";
import styled from "@emotion/styled";
import {css} from "@emotion/react";

const StyledButton = styled("div")<ButtonProps>`
  ${props => props.mode === "darkmode" && css`
    background-color: ${props.theme.button.darkmode.background};

    svg {
      path {
        fill: ${props.theme.button.darkmode.font}
      }
    }
  `}
  ${props => props.mode === "dark" && css`
    background-color: ${props.theme.button.dark.background};

    svg {
      path {
        fill: ${props.theme.button.dark.font}
      }
    }
  `}
  ${props => props.mode === "light" && css`
    background-color: ${props.theme.button.light.background};

    svg {
      path {
        fill: ${props.theme.button.light.font}
      }
    }
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

const IconButton = (props: ButtonProps) => {
    return (
        <StyledButton {...props}>
            {props.children}
        </StyledButton>
    )
}

IconButton.defaultProps = {
    mode: "darkmode"
};

export default IconButton;
