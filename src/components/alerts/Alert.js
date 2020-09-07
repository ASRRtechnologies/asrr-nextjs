import React from 'react';
import styled from "@emotion/styled";
import info from "../../../public/assets/icons/info.svg";
import success from "../../../public/assets/icons/check.svg";
import error from "../../../public/assets/icons/failed.svg";
import useI18n from "../../hooks/use-i18n";

const Wrapper = styled('div')`
        background-color: ${props => props.theme.alert.background};
        h4 {color: ${props => props.theme.fonts.title}}
        p{color:${props => props.theme.fonts.text}}
         `;

function Alert(props) {

    const i18n = useI18n();

    const showIcon = () => {
        for (let prop in props) {
            switch (Object.prototype.hasOwnProperty.call(props, prop)) {
                case props.error:
                    return <img src={error}/>;
                case props.success:
                    return <img src={success}/>;
                case props.info:
                    return <img src={info}/>;
            }
        }
    };

    return (
        <Wrapper className="message-container">
            <div className="icon">
                {showIcon()}
            </div>

            {console.log(i18n)}

            <div className="message">
                <h4>{i18n.t(props.title)}</h4>
                <p>{i18n.t(props.text)}</p>
            </div>

            <span className="close-button">
                <p onClick={props.closeToast}>X</p>
            </span>

        </Wrapper>
    );
}

export default Alert;