import React from 'react';
import cardStyles from '@/modules/shared/cards/cards.module.scss';
import AspectRatio from '@/library/aspect-ratio/AspectRatio';
import Image from 'next/image';

type MediaTypeProps =
  | {
      mediaType: 'video';
      src: string;
      alt?: never;
      description: string;
      reference: string;
    }
  | {
      mediaType: 'image';
      src: string;
      alt: string;
      description: string;
      reference: string;
    };

interface MediaProps {
  media: MediaTypeProps;
  basePath: string;
}

const Video = (props: MediaProps) => {
  return (
    <video autoPlay controls muted loop id="myVideo" className="video">
      <source src={`${props.basePath}/${props.media.src}`} type="video/mp4" />
    </video>
  );
};

const MediaImage = (props: MediaProps) => {
  if (props.media.mediaType === 'image')
    return (
      <Image
        src={`${props.basePath}/${props.media.src}`}
        alt={props?.media.alt}
        layout="fill"
      />
    );
};

function ArticleImage(props: MediaProps) {
  const { reference, description } = props.media;
  return (
    <div className={`${cardStyles.card} ${cardStyles.blogImage}`}>
      {props.media.mediaType === 'image' ? (
        <AspectRatio x={4} y={3}>
          <MediaImage {...props} />
        </AspectRatio>
      ) : (
        <Video {...props} />
      )}

      <div className={cardStyles.description}>
        <p className="h6">{description}</p>
        <a
          className="h7"
          href={reference}
          target="_blank"
          rel="noopener noreferrer"
        >
          {reference}
        </a>
      </div>
    </div>
  );
}

export default ArticleImage;
