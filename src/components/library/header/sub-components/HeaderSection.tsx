import React from 'react';
import { styles } from '@/library/styles/global_variabels';
import styled from '@emotion/styled';

export const StyledHeaderSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${styles.primaryColor} !important;
  color: ${styles.whiteFont};
`;

function HeaderSection(props) {
  return (
    <StyledHeaderSection>
      {props.children}
    </StyledHeaderSection>
  );
}

export default HeaderSection;
