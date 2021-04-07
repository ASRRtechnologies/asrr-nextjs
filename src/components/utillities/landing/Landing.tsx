import React from 'react';
import styled from "@emotion/styled";
import {styles} from "@/styles/global";
import {LandingProps, LandingType} from "@/utillities/landing/types";
import ImageLanding from "@/utillities/landing/sub-components/ImageLanding";
import TextLanding from "@/utillities/landing/sub-components/TextLanding";

const StyledLanding = styled.div`
  width: 100vw;
  min-height: 70vh;
  background-color: ${styles.secondaryColor};
  padding: 100px;
`

function Landing(props: LandingProps) {

    const renderComponent = () => {
        if (props.type === LandingType.ImageLanding)
            return <ImageLanding {...props}/>

        if (props.type === LandingType.TextLanding)
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
