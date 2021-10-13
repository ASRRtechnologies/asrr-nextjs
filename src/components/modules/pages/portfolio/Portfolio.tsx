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
        {allCases.map((project, i) => {
          //Set delay for each uneven card. TODO make cards on mobile just same speed
          const animationSettings = animationsSettings({}, i);

          return (
            <Fade style={{ width: '100%' }} {...animationSettings}>
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

export default Portfolio;
