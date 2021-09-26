import AspectRatio from '@/library/aspect-ratio/AspectRatio';
import React from 'react'
import testimonialStyles from "./testimonial.module.scss";

interface TestimonialCardProps {
    reverse: boolean;
    content: any,
    basePath: string
}

function TestimonialCards(props:TestimonialCardProps) {
    const {name, position, story, company, alt, image} = props.content;
    const {left, basePath} = props;

    return (
        <div className={`${testimonialStyles.card} ${left && testimonialStyles.reverse}`}>
            <div className={testimonialStyles.cardImage}>
                <AspectRatio x={4} y={4}>
                    <img src={`${basePath}/${image}`} alt={alt}/>
                </AspectRatio>
            </div>

            <div className={testimonialStyles.cardContent}>
                <div className={testimonialStyles.credentials}>
                  <span className={testimonialStyles.avatar}>
                    <AspectRatio x={1} y={1}>
                    <img src={`${basePath}/${image}`} alt={alt}/>
                    </AspectRatio>
                    </span>

                    <span>
                    <h1 className={`${testimonialStyles.H4} h4`}>{name}</h1>
                    <h1 className={`${testimonialStyles.H5} h5 not-bold`}>{position}</h1>
                    <h3 className="h6 not-bold">{company}</h3>
                </span>
                </div>

                <div className={testimonialStyles.story}>
                    <h4 className="h3">A simple solution</h4>
                    <p>"{story}"</p>
                </div>
            </div>

        </div>

    )
}

export default TestimonialCards
