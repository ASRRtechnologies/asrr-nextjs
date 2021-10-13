import React from 'react';
import gridStyles from './grid.module.scss';
import Section from '@/modules/shared/section/Section';
// @ts-ignore
import logo from '#/logo/asrr-logo-spacing-white.svg';
import styled from '@emotion/styled';
import { maxWidth } from '../../../../data/style_variables';
import { clients } from '../../../../data/clients';

type ImageProps = {
  image: string;
  logo: string;
  alt: string;
};

interface GridProps {
  col?: number;
  images?: ImageProps[];
  total: number;
}

const calculateRemainder = (total: number, col: number): number => col % total;

const StyledGrid = styled(`div`)<GridProps>`
  display: flex;
  width: 100%;
  max-width: ${maxWidth};
  flex-wrap: wrap;
  justify-content: center;

  .grid {
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${`${100 / 4}%`};
    margin: 0 25px;

    & * {
      width: 100%;
      max-width: 150px;
      height: auto;
    }
  }
`;

function FlexGrid(props: GridProps) {
  return (
    <Section>
      <StyledGrid
        col={props.col}
        images={props.images}
        total={props.images.length}
        className={gridStyles.grid}
      >
        {clients.map(({ image }) => (
          <div className="grid">{image}</div>
        ))}
      </StyledGrid>
    </Section>
  );
}

export default FlexGrid;
