import Section from '@/modules/shared/section/Section'
import Title from '@/utillities/titles/Title'
import React from 'react'
import styled from '@emotion/styled'
import TestimonialCards from '@/testimonials/TestimonialCard'
import testimonialStyles from "./testimonial.module.scss";
import {Fade} from "react-awesome-reveal";
import {cardAnimation} from "../../data/animations-settings";

const Wrapper = styled(Section)`
  background: ${props => props.theme.home.stories};
}`;

function Testimonials({data, basePath}) {
    return (
        <Section>
            <Title title={data.title} text={data.text}/>

            <div className={testimonialStyles.testimonials}>
                {data.cards.map((testimonial, i) => {
                    const even = i % 2 === 0;
                    return (
                            <Fade {...cardAnimation} className={testimonialStyles.cardFadeWrapper}>
                                <TestimonialCards content={testimonial} basePath={basePath} reverse={even}/>
                            </Fade>
                        )
                    }
                )}
            </div>
        </Section>
    )
}

export default Testimonials
