import React from 'react';
import Image from 'next/image';

function PictureFallback({
  image,
  fallbackImage,
  fallbackType,
  alt,
  className,
}) {
  const appendImage = () => {
    let path = fallbackImage;
    let splitPath = path.split('.')[0];
    return splitPath.concat('.webp');
  };

  return (
    <picture>
      <source srcSet={image} type="image/webp" />
      <source
        srcSet={fallbackImage}
        type={!fallbackType ? 'image/jpeg' : fallbackType}
      />
      <Image src={fallbackImage} alt={alt} className={className} />
    </picture>
  );
}

export default PictureFallback;
