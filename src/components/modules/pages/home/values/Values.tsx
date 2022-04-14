import React, { useState } from 'react';
import Section from '@/modules/shared/section/Section';
import Title from '@/utillities/titles/Title';
import styled from '@emotion/styled';
import valueStyles from './values.module.scss';
import { Fade } from 'react-awesome-reveal';

const Wrapper = styled(Section)``;

const RenderQuality = ({ description }) => {
  return (
    //@ts-ignore
    <Fade triggerOnce={true} delay={300}>
      <p className={`${valueStyles.text} no-margin`}>{description}</p>
    </Fade>
  );
};

function Values({ content }) {
  const { qualities, title, text } = content;
  const [currentQuality, setCurrentQuality] = useState(0);

  const changeValue = (i) => setCurrentQuality(i);

  return (
    <Wrapper>
      <Title title={title} text={text} />

      <div className={valueStyles.values}>
        <div className={valueStyles.valueTitlesContainer}>
          {qualities.map((quality, i) => {
            const active = currentQuality === i;
            return (
              //@ts-ignore
              <Fade triggerOnce={true} cascade={true} key={i}>
                <div
                  onClick={() => changeValue(i)}
                  className={`${valueStyles.valueTitles}  ${
                    active && valueStyles.active
                  }`}
                >
                  <h1 className="h3">{quality.quality}</h1>
                </div>
              </Fade>
            );
          })}
        </div>
        <RenderQuality description={qualities[currentQuality].description} />
      </div>
    </Wrapper>
  );
}

export default Values;
