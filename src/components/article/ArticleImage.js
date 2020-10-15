import React from 'react';
import image from "../../../public/assets/images/erik-mclean-ZRns2R5azu0-unsplash.jpg"
import Animation from "@/animation/Animation";

function ArticleImage({square}) {
    return (
        <Animation animation="fade" className={`${square ? "square-image" : "wide-image"} aspect-ratio-container margin-bottom-article-section`}>
            <div className={`aspect-ratio-wrapper ${square ? "square-width-aspect-ratio" : "full-width-aspect-ratio"}`}>
                <img src={image}/>
            </div>
            <h4>This is an image text</h4>
        </Animation>
    );
}

export default ArticleImage;