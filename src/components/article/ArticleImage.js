import React from 'react';
import image from "../../../public/assets/images/erik-mclean-ZRns2R5azu0-unsplash.jpg"

function ArticleImage({square}) {
    return (
        <div className={`${square ? "square-image" : "wide-image"} aspect-ratio-container margin-bottom-text-section`}>
            <div className={`aspect-ratio-wrapper ${square ? "square-width-aspect-ratio" : "full-width-aspect-ratio"}`}>
                <img src={image}/>
            </div>
            <h4>This is an image text</h4>
        </div>
    );
}

export default ArticleImage;