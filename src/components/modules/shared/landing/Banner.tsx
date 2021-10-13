import React from 'react';
import bannerStyles from "./banner.module.scss"
import Section from "@/modules/shared/section/Section";
import Filter from "@/modules/shared/section/Filter";
import Reveal, {Fade} from "react-awesome-reveal";
import {textAnimations, zoomIn} from "../../../../data/animations-settings";

type ButtonProps = {
    text: string,
    path: string
}

interface BannerProps {
    title: string
    text?: string,
    image?: string,
    alt?: string,
    button?: ButtonProps,
    landing?: boolean
}

function Banner(props: BannerProps) {
    return (
        <Section className={`${bannerStyles.banner} ${props.landing && bannerStyles.landing}`}>
            {props.image && <Filter opacity={0.6}/>}

            <Reveal keyframes={zoomIn} duration={1800} className="image-zoom-animation">
                <img src={props.image} alt={props.alt}/>
            </Reveal>

            <div className={bannerStyles.innerBanner}>
                <Fade {...textAnimations}>
                    <h1>
                        {props.title}
                    </h1>
                    <p>
                        {props.text}
                    </p>

                    {/*<p>Button Here</p>*/}
                </Fade>
            </div>
        </Section>
    );
}

export default Banner;
