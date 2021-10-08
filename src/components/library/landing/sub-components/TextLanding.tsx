import {TextLandingProps} from "@/library/landing/types";
import React from "react";
import styled from "@emotion/styled";
import {mq, styles} from "@/library/styles/global_variabels";

const StyledTextLanding = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  max-width: ${styles.maxWidth};
 
  p{
    max-width:600px;
  }
  
  ${mq["lg"]}{
    flex-direction: row;
    align-items: center;

    p{
      max-width:400px;
    }
    
    h1{
      max-width: 500px;
      word-spacing: 100vw;
      margin-bottom: 0;
    }
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
