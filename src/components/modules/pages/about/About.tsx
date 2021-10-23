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
import articleStyles from '@/modules/shared/article/article.module.scss';

const Wrapper = styled(Section)``;

const HeaderOne = ({ children }) => {
  return <h1 className="h2">{children}</h1>;
};

const HeaderTwo = ({ children }) => {
  return <h2 className="h3 no-margin">{children}</h2>;
};

const HeaderThree = ({ children }) => {
  return <h3 className="h4 no-margin">{children}</h3>;
};

const HeaderFour = ({ children }) => {
  return <h4 className="h5 no-margin">{children}</h4>;
};

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

      {/*<Section className="darkmodeContainer">*/}
      {/*  <div className={articleStyles.body}>*/}
      {/*    <div className={articleStyles.content}>*/}
      {/*      <Markdown*/}
      {/*        options={{*/}
      {/*          overrides: {*/}
      {/*            h1: HeaderOne,*/}
      {/*            h2: HeaderTwo,*/}
      {/*            h3: HeaderThree,*/}
      {/*            h4: HeaderFour,*/}
      {/*          },*/}
      {/*          wrapper: React.Fragment,*/}
      {/*        }}*/}
      {/*      >*/}
      {/*        {content.section.content}*/}
      {/*      </Markdown>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</Section>*/}

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
