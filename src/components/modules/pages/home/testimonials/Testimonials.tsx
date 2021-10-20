import Section from '@/modules/shared/section/Section';
import Title from '@/utillities/titles/Title';
import React from 'react';
import styled from '@emotion/styled';
import TestimonialCards from '@/modules/pages/home/testimonials/TestimonialCard';
import testimonialStyles from './testimonial.module.scss';
import { Fade } from 'react-awesome-reveal';
import { cardAnimation } from '../../../../../data/animations-settings';

const Wrapper = styled(Section)``;

function Testimonials({ content, basePath }) {
  console.log(content);
  return (
    <Section>
      <Title title={content.title} text={content.text} />
      <div className={testimonialStyles.testimonials}>
        {content.cards.map((testimonial, i) => {
          return (
            <Fade
              key={i}
              {...cardAnimation}
              className={testimonialStyles.cardFadeWrapper}
            >
              <TestimonialCards content={testimonial} basePath={basePath} />
            </Fade>
          );
        })}
      </div>
    </Section>
  );
}

export default Testimonials;
