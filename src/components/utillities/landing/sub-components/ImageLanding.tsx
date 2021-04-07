import styled from "@emotion/styled";
import {styles} from "@/styles/global";
import {ImageLandingProps} from "@/utillities/landing/types";
import Image from "next/image";
import React from "react";

const StyledLandingWithSideImage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: ${styles.maxWidth};
`

const ImageLanding = (props: ImageLandingProps) => {
    const {image, title, text, button,} = props;

    return (
        <StyledLandingWithSideImage>
            <span>
                <h1>{title}</h1>
                <p>{text}</p>
                <div className="button-group for now"/>
            </span>

            <Image
                src={image}
                alt="Mountains"
                layout="responsive"
                width={400}
                height={400}
            />
        </StyledLandingWithSideImage>
    )
}

export default ImageLanding;
