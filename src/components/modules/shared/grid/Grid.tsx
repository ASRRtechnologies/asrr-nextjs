import React, {useEffect, useRef} from 'react';
import gridStyles from "./grid.module.scss"
// @ts-ignore
import logo from '#/logo/asrr-logo-spacing-white.svg'
import styled from "@emotion/styled";
import {maxWidth} from "../../../../data/style_variables";
import _ from "lodash";
import {Omit} from "@material-ui/core";

type Breakpoint = {
    ["x: number"]: number
}

interface GridProps {
    children: React.ReactElement[] | React.ReactElement;
    breakpoints: Breakpoint
}

const StyledGrid = styled(`div`)<Omit<GridProps, 'children' | 'breakpoints'>>`
  grid-row-gap: 50px;
  grid-column-gap: 30px;
  width: 100%;
  max-width: ${maxWidth};
  justify-items: center;
`

const getCurrentColumn = (breakpoints: Breakpoint): number => {
    let parsedBreakpoints = [];

    for (let breakPoint in breakpoints) {
        parsedBreakpoints.push({
            col: breakpoints[breakPoint],
            media: parseInt(breakPoint)
        })
    }

    let filteredBreakpoints = [];
    filteredBreakpoints = parsedBreakpoints.filter((breakpoint, i) => {
        return window.innerWidth >= breakpoint.media;
    });

    //Sort from high to low by media query
    let sortedByLargestBreakpoints = [];
    sortedByLargestBreakpoints = filteredBreakpoints.sort((a, b) => a.media > b.media ? -1 : 1);

    //Grab biggest media query
    return sortedByLargestBreakpoints[0].col;
}

function Grid(props: GridProps) {
    const gridRef = useRef(null);

    const renderColumns = () => {
        const currentCol = getCurrentColumn(props.breakpoints);
        gridRef.current.style.gridTemplateColumns = `repeat(${currentCol}, 1fr)`;
    }

    useEffect(() => {
        //For initial layout props
        renderColumns();

        //Fires on scroll after every 1 second
        window.addEventListener("resize", _.throttle(renderColumns, 1000))
        return window.removeEventListener("resize", _.throttle(renderColumns, 1000))
    }, [])

    return (
        <>
            <StyledGrid ref={gridRef} className={gridStyles.grid}>
                {React.Children.map(props.children, child => (
                    React.cloneElement(child, {style: {...child.props.style}})
                ))}

            </StyledGrid>
        </>

    );
}

export default Grid;
