import {TextLandingProps} from "@/utillities/landing/types";
import React from "react";
import styled from "@emotion/styled";
import {styles} from "@/styles/global";

const StyledTextLanding = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: ${styles.maxWidth};
`
const TextLanding = (props: TextLandingProps) => {
    const {title, text, button,} = props;

    return (
        <StyledTextLanding>
            <span>
                <h1>{title}</h1>
                <p>{text}</p>
                <div className="button-group for now"/>
            </span>
        </StyledTextLanding>
    )
}

export default TextLanding;
