import React from 'react';
import Section from '../../../shared/section/Section';
import Title from '../../../../utillities/titles/Title';
import styled from '@emotion/styled';
import { useTheme } from '../../../../../context/theme/ThemeContext';
import Grid from '@/modules/shared/grid/Grid';
import { css } from '@emotion/react';
import { clients } from '../../../../../data/clients';
import uuid from 'uuid';

// const Wrapper = styled(Section)`
//   background: ${props => props.theme.home.techstack};
// }`;

interface TechStack {
  darkmode: boolean;
  key: number;
}

const Client = styled('div')<TechStack>`
  display: block;
  width: 150px;
  min-width: 30px;
  height: auto;
  filter: brightness(0);

  svg {
    width: 100%;
    height: auto;
  }

  ${(props) =>
    props.darkmode &&
    css`
      filter: invert(1);
    `}
`;

function Clients({ content }) {
  const darkmode = useTheme().dark;

  const breakPoints = {
    1200: 3,
    600: 2,
    400: 1,
    0: 1,
  };

  return (
    <Section>
      <Title title={content.title} text={content.text} />
      <Grid breakpoints={breakPoints} fade={true}>
        {clients.map(({ image }, i) => (
          <Client darkmode={darkmode} key={uuid()}>
            {image}
          </Client>
        ))}
      </Grid>
    </Section>
  );
}

export default Clients;
