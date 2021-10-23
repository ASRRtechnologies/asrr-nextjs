import React from 'react';
import Section from '@/modules/shared/section/Section';
import Title from '@/utillities/titles/Title';
import styled from '@emotion/styled';
import Grid from '@/modules/shared/grid/Grid';
import AboutCards from './AboutCards';
import aboutStyles from './aboutStyles.module.scss';
import AspectRatio from '@/library/aspect-ratio/AspectRatio';
import { Fade } from 'react-awesome-reveal';
import Markdown from 'markdown-to-jsx';

const Wrapper = styled(Section)``;

function About({ content }) {
  const { title, text, image, alt } = content.section;
  const basePath = `content/over/nl/over`;
  console.log(content);

  const breakPoints = {
    700: 2,
    400: 1,
    0: 1,
  };

  return (
    <Wrapper>
      <Title title={title} text={text} />

      <div className={aboutStyles.services}>
        <div className={aboutStyles.gridWrapper}>
          <Grid breakpoints={breakPoints} fade={true} maxWidth="1400px">
            {content.section.kernwaarden.map((kernwaarde) => {
              return (
                <AboutCards
                  key={kernwaarde.title}
                  kernwaarde={kernwaarde}
                  basePath={basePath}
                />
              );
            })}
          </Grid>
        </div>

        <Fade className={aboutStyles.image}>
          <div>
            <AspectRatio x={3} y={4}>
              <img src={`${basePath}/${image}`} alt={alt} />
            </AspectRatio>
          </div>
        </Fade>
      </div>
    </Wrapper>
  );
}

export default About;
