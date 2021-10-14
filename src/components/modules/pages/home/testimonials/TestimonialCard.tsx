import AspectRatio from '@/library/aspect-ratio/AspectRatio';
import React from 'react';
import testimonialStyles from './testimonial.module.scss';
import Image from 'next/image';

interface TestimonialCardProps {
  content: any;
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
            <h1 className={`${testimonialStyles.H4} h4`}>{name}</h1>
            <h1 className={`${testimonialStyles.H5} h5 not-bold`}>
              {position}
            </h1>
            <h3 className="h6 not-bold">{company}</h3>
          </span>
        </div>

        <div className={testimonialStyles.story}>
          <h4 className="h3">{title}</h4>
          <p className="no-margin">"{story}"</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCards;
