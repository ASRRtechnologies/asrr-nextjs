import React, {useEffect, useRef} from 'react';
import gridStyles from "./grid.module.scss"
// @ts-ignore
import logo from '#/logo/asrr-logo-spacing-white.svg'
import styled from "@emotion/styled";
import {maxWidth} from "../../../../data/style_variables";
import css from "@emotion/css";
import {useMedia} from "react-use";

type Breakpoint = {
    ["x: number"]: number
}

interface GridProps {
    children: React.ReactElement[] | React.ReactElement;
    breakpoints: Breakpoint
}

const highestBreakPoint = (breakpoint: Breakpoint) => {

}

const StyledGrid = styled(`div`)<GridProps>`
  grid-row-gap: 50px;
  grid-column-gap: 30px;
  width: 100%;
  max-width: ${maxWidth};
  justify-items: center;
 
`

function Grid(props: GridProps) {
    const gridRef = useRef(null);

    const renderBreakPoints = (breakpoints: Breakpoint) => {
        let parsedBreakpoints = [Object.entries(breakpoints)];
        let filteredBreakpoints = [];
        let sortedByLargestBreakpoints = [];
        let currentCol;

       filteredBreakpoints = parsedBreakpoints.filter((breakpoint, i) => {
            return window.innerWidth >= breakpoint[i][1]
        });

       console.log(filteredBreakpoints)
        //if smaller than smallest breakpoint use smallest one
        if(filteredBreakpoints === []){
            gridRef.current.style.gridTemplateColumns = `repeat(${currentCol}, 1fr)`;
        }

        //Sort from high to low in screensize
        sortedByLargestBreakpoints = filteredBreakpoints.sort((a, b) => a.media > b.media ? -1 : 1);

        //Get first or highest media query that is true
        currentCol = sortedByLargestBreakpoints[0].col;

        gridRef.current.style.gridTemplateColumns = `repeat(${currentCol}, 1fr)`;
    }

    useEffect(() => {
        window.addEventListener("resize", () => renderBreakPoints(props.breakpoints))
        return window.removeEventListener("resize", () => renderBreakPoints(props.breakpoints))
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
