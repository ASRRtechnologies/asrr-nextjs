/** @jsxImportSource @emotion/react */
import React from 'react';
import {ActionButtonProps} from "@/library/button/types";
import {useButtonStyles} from "@/library/button/hooks/button-hooks";
import {BaseButtonStyle} from "@/library/button/shared-styles/ButtonStyles";
import {css} from "@emotion/react";

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
