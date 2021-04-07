import React from "react";

export enum LandingType {
    TextLanding = "text-landing",
    ImageLanding = "image-landing"
}

export interface BaseLandingProps {
    title: string,
    text: string,
    button?: React.ReactElement,
}

export interface TextLandingProps extends BaseLandingProps {
    type: LandingType.TextLanding
}

export interface ImageLandingProps extends BaseLandingProps {
    image: string,
    type: LandingType.ImageLanding
}

export type LandingProps = ImageLandingProps | TextLandingProps
