import React from 'react';
import styled from '@emotion/styled';

const Content = styled.div<{ isExpanded: boolean }>`
  display: ${(props) => (props.isExpanded ? 'block' : 'none')};
`;

const Accordion = ({ collapsed, children }) => {
  return (
    <>
      <Content isExpanded={collapsed} aria-expanded={collapsed}>
        {children}
      </Content>
    </>
  );
};

export default Accordion;
