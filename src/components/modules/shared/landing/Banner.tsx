import React from 'react';
import bannerStyles from "./banner.module.scss"
import teamStyles from "@/modules/team/teamStyles.module.scss";


function Banner(props) {
    return (
        <div className={`${bannerStyles.banner} global-padding-horizontal global-padding-vertical`}>
            <div className={bannerStyles.innerBanner}>
                <h1>
                    De team
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cumque eaque est fugiat ipsa laborum
                    nisi optio quod ratione velit. Adipisci amet aut consectetur dignissimos hic illum labore quia,
                    quod!
                </p>
            </div>
        </div>
    );
}

export default Banner;
