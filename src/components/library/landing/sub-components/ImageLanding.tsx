import styled from "@emotion/styled";
import {mq, styles} from "@/utillities/styles/global_variabels";
import {ImageLandingProps} from "@/utillities/landing/types";
import Image from "next/image";
import React from "react";
import SubSection from "@/utillities/section/sub-components/SubSection";
import Square from "@/utillities/shapes/Square";

const StyledLandingWithSideImage = styled(SubSection)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  p{
    max-width:600px;
  }
  
  img{
    display: block;
    width: 100%;
    object-fit: cover;
    border-radius: ${styles.imageBorderRadius};
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
    }
    
    img{
      //margin-bottom: ;
    }
    
  }
`

const ImageLanding = (props: ImageLandingProps) => {
    const {image, title, text, button} = props;

    return (
        <StyledLandingWithSideImage maxWidth={true}>
            <span>
                <h1>{title}</h1>
                <p>{text}</p>
                {button}
            </span>

            <Square maxWidth={400} style={{borderRadius:styles.imageBorderRadius}}>
                <img
                    src={image}
                    alt="Mountains"
                />
            </Square>

        </StyledLandingWithSideImage>
    )
}

export default ImageLanding;
