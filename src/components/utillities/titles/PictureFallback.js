import React from 'react';

function PictureFallback({image, fallbackImage, fallbackType, alt, className}) {
    return (
        <picture>
            <source srcSet={image} type="image/webp"/>
            <source srcSet={fallbackImage} type={!fallbackType ? "image/jpeg" : fallbackType}/>
            <img src={fallbackImage} alt={alt} className={className}/>
        </picture>
    );
}

export default PictureFallback;
