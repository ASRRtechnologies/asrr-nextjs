/** @jsxImportSource @emotion/react */
import React from 'react';
import {NavigationButtonProps} from "@/utillities/button/types";
import Link from "next/link";
import {BaseButtonStyle} from "@/utillities/button/shared-styles/ButtonStyles";
import {useButtonStyles} from "@/utillities/button/hooks/button-hooks";
import css from "@emotion/css";

function NavigationButton(props: NavigationButtonProps) {
    const {to, text, buttonStyle} = props;

    const {styles} = useButtonStyles(buttonStyle);

    return (
        <div css={css`${BaseButtonStyle} ${styles}`}>
            <Link href={to}>
                <a>
                    {text}
                </a>
            </Link>
        </div>
    );
}

export default NavigationButton;
