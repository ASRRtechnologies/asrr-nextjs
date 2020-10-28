import React from 'react';
import fallback from "../../../public/assets/images/erik-mclean-ZRns2R5azu0-unsplash.jpg"
import Animation from "@/animation/Animation";
import useI18n from "../../hooks/use-i18n";

function ArticleImage({square, image, subtitle}) {
    let i18n = useI18n();
    return (
        <Animation animation="fade" className={`${square ? "square-image" : "wide-image"} aspect-ratio-container margin-bottom-article-section`}>
            <div className={`aspect-ratio-wrapper ${square ? "square-width-aspect-ratio" : "full-width-aspect-ratio"}`}>
                <img src={image ? image : fallback} alt={image}/>
            </div>
            {subtitle && <h4>{i18n.t(subtitle) !== undefined ? i18n.t(subtitle) : subtitle}</h4>}
        </Animation>
    );
}

export default ArticleImage;