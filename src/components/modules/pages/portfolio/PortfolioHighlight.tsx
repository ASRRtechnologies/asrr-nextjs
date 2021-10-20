import React from 'react';
import cardStyles from '@/modules/pages/portfolio/card.module.scss';
import img from '#/landing/placeholder.jpg';
import Section from '@/modules/shared/section/Section';
import {
  PortfolioHighlightProps,
  StyledPortfolioHighlightProps,
} from '@/modules/pages/portfolio/types';
import Reveal, { Fade } from 'react-awesome-reveal';
import Filter from '@/modules/shared/section/Filter';
import {
  bannerAnimations,
  textAnimations,
  zoomIn,
} from '../../../../data/animations-settings';
import LinkText from '../../shared/text/LinkText';
import DarkModeCard from '@/modules/shared/cards/DarkModeCard';
import styled from '@emotion/styled';
import Image from 'next/image';

const StyledPortfolioHighlight = styled(`div`)<StyledPortfolioHighlightProps>`
  @media screen and (min-width: 1024px) {
    box-shadow: ${(props) => props.theme.card.shadow};
  }
`;

function PortfolioHighlight(props: PortfolioHighlightProps) {
  const projectName = props.title;
  const { image, alt, title, text } = props.card;
  const { client, date, author, tags } = props.info;
  return (
    <StyledPortfolioHighlight className="global-margin-vertical">
      <Section
        className={`${cardStyles.highlight} ${
          props.reverse && cardStyles.highlightLeft
        }`}
      >
        <Filter opacity={0.15} />

        <Reveal
          keyframes={zoomIn}
          {...bannerAnimations}
          className="image-zoom-animation"
        >
          <Image src={`${props.basePath}/${image}`} alt={alt} layout="fill" />
        </Reveal>

        <DarkModeCard className={cardStyles.highlightCard}>
          <div className={cardStyles.highlightCardInner}>
            <Fade {...textAnimations}>
              <h1 className="h2 primary-color">{title}</h1>
              <p className="no-margin">{text}</p>

              {/*Extra fragment because fade messes with link styling*/}
              <>
                <LinkText
                  href={`/portfolio/${projectName}`}
                  customlink={false}
                  classes="bold lees-meer"
                  title={null}
                />
              </>
            </Fade>
          </div>
        </DarkModeCard>
      </Section>
    </StyledPortfolioHighlight>
  );
}

export default PortfolioHighlight;
