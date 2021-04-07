import {TextLandingProps} from "@/utillities/landing/types";
import React from "react";
import styled from "@emotion/styled";
import {styles} from "@/utillities/styles/global_variabels";

const StyledTextLanding = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${styles.maxWidth};
 
  p{
    max-width:400px;
  }
  
`
const TextLanding = (props: TextLandingProps) => {
    const {title, text, button,} = props;

    return (
        <StyledTextLanding>
            <span>
                <h1>{title}</h1>
            </span>

            <span>
                <p>{text}</p>
                {props?.button}
            </span>
        </StyledTextLanding>
    )
}

export default TextLanding;
