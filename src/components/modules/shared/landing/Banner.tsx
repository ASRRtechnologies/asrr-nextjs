import React from 'react';
import bannerStyles from "./banner.module.scss"
import Section from "@/modules/shared/section/Section";

interface BannerProps {
    title: string
    text?: string,
    image? : string,
    alt? : string
}

function Banner(props: BannerProps) {
    return (
        <Section className={`${bannerStyles.banner}`}>
            <div className={bannerStyles.innerBanner}>
                <h1>
                    {props.title}
                </h1>
                <p>
                    {props.text}
                </p>
            </div>
        </Section>
    );
}

export default Banner;
