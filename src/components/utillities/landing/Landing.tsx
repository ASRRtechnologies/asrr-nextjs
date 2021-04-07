import React from 'react';
import styled from "@emotion/styled";
import {styles} from "@/styles/global";
import {LandingProps} from "@/utillities/landing/types";
import ImageLanding from "@/utillities/landing/sub-components/ImageLanding";
import TextLanding from "@/utillities/landing/sub-components/TextLanding";

const StyledLanding = styled.div`
  width: 100vw;
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${styles.tertiaryColor};
  padding: 100px;
  
  h1, p {
    color: ${styles.whiteFont};
  }
  
  h1{
    word-spacing: 100vw;
    width: 500px;
  }

`

function Landing(props: LandingProps) {

    const renderComponent = () => {
        if (props.type === "image-landing")
            return <ImageLanding {...props}/>

        if (props.type === "text-landing")
            return <TextLanding {...props}/>

        throw new Error("Landing component type not specified")
    }

    return (
        <StyledLanding>
            {renderComponent()}
        </StyledLanding>
    );
}

export default Landing;
