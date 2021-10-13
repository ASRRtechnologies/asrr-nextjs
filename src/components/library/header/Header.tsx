import React, { ReactElement } from 'react';
import { HeaderComponent, HeaderProps } from '@/library/header/types';
import Section from '@/library/section/Section';
import SubSection from '@/library/section/sub-components/SubSection';
import styled from '@emotion/styled';

const StyledHeader = styled(SubSection)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function Header(props: HeaderProps) {

  const renderHeaderComponents = (test: HeaderComponent): ReactElement => {
    return (
      <div>
        {test !== null && test !== undefined && test}
      </div>
    );
  };

  return (
    <Section padding={false} {...props}>
      <StyledHeader maxWidth={true}>
        {renderHeaderComponents(props.left)}
        {renderHeaderComponents(props.center)}
        {renderHeaderComponents(props.right)}
      </StyledHeader>
    </Section>
  );
}

export default Header;
