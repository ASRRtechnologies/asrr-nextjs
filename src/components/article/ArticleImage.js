import React from 'react';
import fallback from "../../../public/assets/images/erik-mclean-ZRns2R5azu0-unsplash.jpg"
import Animation from "@/animation/Animation";

function ArticleImage({square, image}) {
    return (
        <Animation animation="fade" className={`${square ? "square-image" : "wide-image"} aspect-ratio-container margin-bottom-article-section`}>
            <div className={`aspect-ratio-wrapper ${square ? "square-width-aspect-ratio" : "full-width-aspect-ratio"}`}>
                <img src={image ? image : fallback} alt={image}/>
            </div>
            <h4>This is an image text
            </h4>
        </Animation>
    );
}

export default ArticleImage;