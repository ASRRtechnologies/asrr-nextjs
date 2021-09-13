import React from 'react';
import bannerStyles from "./banner.module.scss"

interface BannerProps {
    title: string
    content?: string
}

function Banner(props: BannerProps) {
    return (
        <div className={`${bannerStyles.banner} global-padding-horizontal global-padding-vertical`}>
            <div className={bannerStyles.innerBanner}>
                <h1>
                    {props.title}
                </h1>
                <p>
                    {props.content}
                </p>
            </div>
        </div>
    );
}

export default Banner;
