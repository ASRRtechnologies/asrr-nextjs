import React, { useEffect, useRef } from 'react';
import gridStyles from './grid.module.scss';
import styled from '@emotion/styled';
import { maxWidth } from '../../../../data/style_variables';
import _ from 'lodash';
import { Omit } from '@material-ui/core';
import { Fade } from 'react-awesome-reveal';

type Breakpoint = {
  [x: number]: number;
};

interface GridProps {
  maxWidth?: string;
  children: React.ReactElement[] | React.ReactElement;
  breakpoints: Breakpoint;
  fade?: boolean;
}

const StyledGrid = styled(`div`)<Omit<GridProps, 'children' | 'breakpoints'>>`
  grid-row-gap: 100px;
  grid-column-gap: 30px;
  width: 100%;
  max-width: ${(props) => props.maxWidth || maxWidth};
  justify-items: center;
`;

const getCurrentColumn = (breakpoints: Breakpoint): number => {
  const parsedBreakpoints = [];

  for (const breakPoint in breakpoints) {
    parsedBreakpoints.push({
      col: breakpoints[breakPoint],
      media: parseInt(breakPoint),
    });
  }

  let filteredBreakpoints = [];
  filteredBreakpoints = parsedBreakpoints.filter((breakpoint) => {
    return window.innerWidth >= breakpoint.media;
  });

  //Sort from high to low by media query
  let sortedByLargestBreakpoints = [];
  sortedByLargestBreakpoints = filteredBreakpoints.sort((a, b) =>
    a.media > b.media ? -1 : 1
  );

  //Grab biggest media query
  return sortedByLargestBreakpoints[0].col;
};

function Grid(props: GridProps) {
  const gridRef = useRef<HTMLDivElement>(null);

  const renderColumns = () => {
    const currentCol = getCurrentColumn(props.breakpoints);
    gridRef.current.style.gridTemplateColumns = `repeat(${currentCol}, 1fr)`;
  };

  useEffect(() => {
    //For initial layout props
    renderColumns();

    //Fires on scroll after every 1 second
    window.addEventListener('resize', _.throttle(renderColumns, 1000));
    return window.removeEventListener(
      'resize',
      _.throttle(renderColumns, 1000)
    );
  });

  return (
    <>
      <StyledGrid
        ref={gridRef}
        className={gridStyles.grid}
        maxWidth={props.maxWidth}
      >
        {React.Children.map(props.children, (child) => {
          if (props.fade) {
            return (
              <Fade fraction={0.4} damping={0.3} triggerOnce={true}>
                {React.cloneElement(child, { style: { ...child.props.style } })}
              </Fade>
            );
          }
          return React.cloneElement(child, { style: { ...child.props.style } });
        })}
      </StyledGrid>
    </>
  );
}

export default Grid;
