import React from 'react';
import {ActionButtonProps} from "@/utillities/button/types";

function ActionButton(props: ActionButtonProps) {
    const {text, type, onClick} = props;

    return (
        <button onClick={onClick}>
            {text}
        </button>
    );
}

export default ActionButton;
