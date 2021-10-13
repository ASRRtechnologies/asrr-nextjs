import React from 'react';
import styled from '@emotion/styled';
import { styles } from '@/library/styles/global_variabels';
import { LandingProps } from '@/library/landing/types';
import ImageLanding from '@/library/landing/sub-components/ImageLanding';
import TextLanding from '@/library/landing/sub-components/TextLanding';
import Section from '@/library/section/Section';

const StyledLanding = styled(Section)`
  width: 100vw;
  min-height: 70vh;

  h1,
  p {
    color: ${styles.whiteFont};
  }
`;

function Landing(props: LandingProps) {
  const renderComponent = () => {
    if (props.type === 'image-landing') return <ImageLanding {...props} />;

    if (props.type === 'text-landing') return <TextLanding {...props} />;

    throw new Error('Landing component type not specified');
  };

  return (
    <StyledLanding padding={true} {...props}>
      {renderComponent()}
    </StyledLanding>
  );
}

export default Landing;
