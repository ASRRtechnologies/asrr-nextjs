import React from 'react';
import buttonStyles from "./buttonStyles.module.scss";
import {ButtonProps, ButtonTypeProps} from "@/modules/shared/buttons/types";
import NavigationButton from "@/modules/shared/buttons/NavigationButton";
import NormalButton from "@/modules/shared/buttons/NormalButton";
import SubmitButton from "@/modules/shared/buttons/SubmitButton";

const renderButton = (props: ButtonTypeProps) => {
    switch (props.buttonType) {
        case "navigation":
            return <NavigationButton {...props} className={`${props.className} ${buttonStyles.button}`}/>
        case "normal":
            return <NormalButton {...props} className={`${props.className} ${buttonStyles.button}`}/>
        case "submit":
            return <SubmitButton {...props} className={`${props.className} ${buttonStyles.button}`}/>
    }
}

function Button(props: ButtonProps) {
    return (
        <>
            {renderButton(props.buttonType)}
        </>
    );
}

export default Button;
