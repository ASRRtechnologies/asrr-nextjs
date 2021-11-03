import React from 'react';
import Section from '@/modules/shared/section/Section';
import PortfolioCard from '@/modules/pages/portfolio/PortfolioCard';
import { animationsSettings } from '../../../../data/animations-settings';
import { Fade } from 'react-awesome-reveal';
import MaxTwoColGrid from '@/modules/shared/layout/MaxTwoColGrid';

function Portfolio(props) {
  const { allCases } = props;
  const basePath = (projectName: string) =>
    `/content/portfolio/cases/nl/${projectName}`; //nl will be language variable

  return (
    <Section>
      <MaxTwoColGrid>
        {shuffle(allCases).map((project, i) => {
          //Set delay for each uneven card. TODO make cards on mobile just same speed
          const animationSettings = animationsSettings({}, i);

          return (
            <Fade key={i} style={{ width: '100%' }} {...animationSettings}>
              <PortfolioCard
                {...project}
                basePath={basePath(project.title)}
                {...animationSettings}
              />
            </Fade>
          );
        })}
      </MaxTwoColGrid>
    </Section>
  );
}

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export default Portfolio;
