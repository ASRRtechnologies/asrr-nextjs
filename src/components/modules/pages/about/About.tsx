import React from 'react';
import Section from '@/modules/shared/section/Section';
import Title from '@/utillities/titles/Title';
import styled from '@emotion/styled';
import Values from '@/modules/pages/home/values/Values';

const Wrapper = styled(Section)``;

function About({ content, homepage }) {
  const { title, text } = content.section;
  console.log(content);

  return (
    <Wrapper>
      <Title title={title} text={text} />
      <Title title={title} text={text} />

      <Values content={homepage.quality} />

      <Title title={title} text={text} />
      <Title title={title} text={text} />
    </Wrapper>
  );
}

export default About;
