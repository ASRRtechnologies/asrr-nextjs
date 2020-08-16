import React from 'react';
import styled from "@emotion/styled";
import info from "../../../public/assets/icons/info.svg";
import success from "../../../public/assets/icons/check.svg";
import error from "../../../public/assets/icons/failed.svg";


const Wrapper = styled('div')`
        background-color: ${props => props.theme.table.background};
        box-shadow:  ${props => props.theme.table.shadow};
        `;

function Messages(props) {

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
                {console.log(props.success)}
            </div>

            <div className="message">
                <h3>{props.title}</h3>
                <p>{props.text}</p>
            </div>

            <span className="close-button">
                <p onClick={props.closeToast}>X</p>
            </span>

        </Wrapper>
    );
}

export default Messages;