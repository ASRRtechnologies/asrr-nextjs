import AspectRatio from '@/library/aspect-ratio/AspectRatio';
import React from 'react';
import testimonialStyles from './testimonial.module.scss';
import Image from 'next/image';

interface TestimonialCardProps {
  content: {
    title: string;
    name: string;
    position: string;
    story: string;
    company: string;
    alt: string;
    image: string;
    avatar: string;
    avatar_alt: string;
  };
  basePath: string;
}

function TestimonialCards(props: TestimonialCardProps) {
  const {
    title,
    name,
    position,
    story,
    company,
    alt,
    image,
    avatar,
    avatar_alt,
  } = props.content;
  const { basePath } = props;

  return (
    <div className={`${testimonialStyles.card}`}>
      <div className={testimonialStyles.cardImage}>
        <AspectRatio x={4} y={4}>
          <Image src={`${basePath}/${image}`} alt={alt} layout="fill" />
        </AspectRatio>
      </div>

      <div className={testimonialStyles.cardContent}>
        <div className={testimonialStyles.credentials}>
          <span className={testimonialStyles.avatar}>
            <AspectRatio x={1} y={1}>
              <Image
                src={`${basePath}/${avatar}`}
                alt={avatar_alt}
                layout="fill"
              />
            </AspectRatio>
          </span>

          <span>
            <h2 className={`${testimonialStyles.H4} h4`}>{name}</h2>
            <h2 className={`${testimonialStyles.H5} h5 not-bold`}>
              {position}
            </h2>
            <h2 className="h6 not-bold">{company}</h2>
          </span>
        </div>

        <div className={testimonialStyles.story}>
          <h2 className="h3">{title}</h2>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <p className="no-margin">"{story}"</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCards;
