import React from "react";
import {ButtonGroup} from "@/library/button-group";
import {StandardProps} from "@/library/index";

declare type LandingType = "text-landing" | "image-landing";

export interface BaseLandingProps extends StandardProps{
    title: string,
    text: string,
    button?: React.ReactElement<typeof ButtonGroup>,
    type: LandingType
}

export interface TextLandingProps extends BaseLandingProps {
    type: "text-landing"
}

export interface ImageLandingProps extends BaseLandingProps {
    image: string,
    type: "image-landing"
}

export type LandingProps = ImageLandingProps | TextLandingProps
