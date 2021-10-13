import React from 'react';
import styled from '@emotion/styled';

interface FilterProps {
  backgroundColor?: string;
  opacity?: number;
}

const StyledFilter = styled('div')<FilterProps>`
  width: 100%;
  height: 100%;
  position: absolute;
  display: block;
  left: 0;
  background-color: ${(props) => props.backgroundColor || '#24272A'};
  opacity: ${(props) => props.opacity || 0.75};
  z-index: 2;
`;

function Filter(props: FilterProps) {
  return (
    <>
      <StyledFilter {...props} />
    </>
  );
}

export default Filter;
