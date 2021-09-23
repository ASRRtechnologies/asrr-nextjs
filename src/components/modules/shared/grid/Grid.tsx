import React from 'react';
import gridStyles from "./grid.module.scss"
import Section from "@/modules/shared/section/Section";
// @ts-ignore
import logo from '#/logo/asrr-logo-spacing-white.svg'
import styled from "@emotion/styled";
import {maxWidth} from "../../../../data/style_variables";
import {clients} from '../../../../data/clients'

type ImageProps = {
    image: string,
    logo: string,
    alt: string,
}

interface GridProps {
    col?: number,
    images?: ImageProps[]
}

const StyledGrid = styled(`div`)<GridProps>`
  grid-template-columns: ${props => props.col ? `repeat(${props.col}, 1fr)` : "1fr 1fr"};
  grid-row-gap: 50px;
  grid-column-gap: 50px;
  width: 100%;
  max-width: ${maxWidth};
  justify-items: center;

  img {
    width: 100%;
    max-width: 200px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

function Grid(props: GridProps) {


return (
    <Section>
        <StyledGrid col={props.col} images={props.images} className={gridStyles.grid}>
            {clients.map(({image}) => <img src={image} alt="text"/>)}
        </StyledGrid>
    </Section>
);
}

export default Grid;
