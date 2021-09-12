import React from "react";
import {ButtonGroup} from "@/utillities/button-group";
import {StandardProps} from "@/utillities/global_types";

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
