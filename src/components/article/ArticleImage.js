import React from 'react';
import fallback from "../../../public/assets/images/erik-mclean-ZRns2R5azu0-unsplash.jpg"
import useI18n from "../../hooks/use-i18n";
import Fade from "react-reveal";

function ArticleImage({square, image, subtitle}) {
    let i18n = useI18n();
    return (
        <Fade bottom>
            <div className={`article-image aspect-ratio-container`}>
                <div className={`aspect-ratio-wrapper ${square ? "square-width-aspect-ratio" : "full-width-aspect-ratio"}`}>
                    <img src={image ? image : fallback} alt={image}/>
                </div>
                {subtitle && <h1 className="label-small-margin">{i18n.t(subtitle) !== undefined ? i18n.t(subtitle) : subtitle}</h1>}
            </div>
        </Fade>
    );
}

export default ArticleImage;
