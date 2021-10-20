import React from 'react';
import Section from '../../../shared/section/Section';
import Title from '../../../../utillities/titles/Title';
import { useTheme } from '../../../../../context/theme/ThemeContext';
import Grid from '@/modules/shared/grid/Grid';
import Image from 'next/image';

function TechStack({ content, basePath }) {
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
        {content.technologies.map((data, i) => (
          <Image
            src={`${basePath}/${data.image}`}
            width={200}
            height={66}
            key={data.image + i}
            className={darkmode ? 'tech-logo tech-logo-dark' : 'tech-logo'}
            alt={data.alt}
          />
        ))}
      </Grid>
    </Section>
  );
}

export default TechStack;
