/** @jsxImportSource @emotion/react */
import React from 'react';
import {ActionButtonProps} from "@/utillities/button/types";
import {useButtonStyles} from "@/utillities/button/hooks/button-hooks";
import {BaseButtonStyle} from "@/utillities/button/shared-styles/ButtonStyles";
import css from "@emotion/css";

function ActionButton(props: ActionButtonProps) {
    const {onClick, text, buttonStyle} = props;

    const {styles} = useButtonStyles(buttonStyle);

    return (
        <button onClick={onClick} css={css`${BaseButtonStyle} ${styles}`}>
            {text}
        </button>
    );
}

export default ActionButton;
