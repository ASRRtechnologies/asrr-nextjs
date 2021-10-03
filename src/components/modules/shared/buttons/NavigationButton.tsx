import React from 'react';
import {NavigationButtonProps} from "@/modules/shared/buttons/types";
import Link from "next/link";
import styled from '@emotion/styled';
import css from "@emotion/css";

const StyledButton = styled("div")<NavigationButtonProps>`
  ${props => props.mode === "darkmode" && css`
    background-color: ${props.theme.button.darkmode.background};
    box-shadow: ${props.theme.button.darkmode.shadow};
    color: ${props.theme.button.darkmode.font} !important;
  `}

  ${props => props.mode === "dark" && css`
    background-color: ${props.theme.button.dark.background};
    box-shadow: ${props.theme.button.dark.shadow};
    color: ${props.theme.button.dark.font} !important;
  `}

  ${props => props.mode === "light" && css`
    background-color: ${props.theme.button.light.background};
    box-shadow: ${props.theme.button.light.shadow};
    color: ${props.theme.button.light.font} !important;
  `}
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
