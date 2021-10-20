import React from 'react';
import styled from '@emotion/styled';

const Arrow = styled('svg')<{ rotated: boolean }>`
  width: 20px;
  height: 20px;
  transition: 200ms ease-in transform;
  cursor: pointer;

  ${(props) =>
    props.rotated &&
    `
    transform: rotate(180deg);
    transition: 200ms ease-in transform;
  `}
`;

interface ChevronProps {
  onClick?: () => void;
  rotate: boolean;
  color?: string;
}

function ChevronRotatable(props: ChevronProps) {
  return (
    <>
      <Arrow
        onClick={props.onClick}
        rotated={props.rotate}
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="451.847px"
        height="451.847px"
        viewBox="0 0 451.847 451.847"
        // @ts-ignore
        style={{ enableBackground: 'new 0 0 451.847 451.847' }}
      >
        <g>
          <path
            fill={props.color || '#fff'}
            d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751
		c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0
		c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"
          />
        </g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
      </Arrow>
    </>
  );
}

export default ChevronRotatable;
