import React from 'react';
import {NavigationButtonProps} from "@/modules/shared/buttons/types";
import Link from "next/link";
import styled from '@emotion/styled';
import css from "@emotion/css";

const StyledButton = styled("div")<NavigationButtonProps>`
  ${props => props.mode === "darkmode" && css`
    background-color: ${props.theme.button.darkmode.background};
    color: ${props.theme.button.darkmode.font} !important;
  `}

  ${props => props.mode === "dark" && css`
    background-color: ${props.theme.button.dark.background};
    color: ${props.theme.button.dark.font} !important;
  `}

  ${props => props.mode === "light" && css`
    background-color: ${props.theme.button.light.background};
    color: ${props.theme.button.light.font} !important;
  `}

  &:hover{
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

const NavigationButton = (props: NavigationButtonProps) => {
    return (
        <StyledButton {...props}>
            <Link href={props.href}>
                <a>{props.title}</a>
            </Link>
        </StyledButton>
    )
}

NavigationButton.defaultProps = {
    mode: "darkmode"
};

export default NavigationButton;
