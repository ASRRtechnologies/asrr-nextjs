import React, {useEffect, useRef} from 'react';
import gridStyles from "./grid.module.scss"
// @ts-ignore
import logo from '#/logo/asrr-logo-spacing-white.svg'
import styled from "@emotion/styled";
import {maxWidth} from "../../../../data/style_variables";

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
        let parsedBreakpoints = [];
        let filteredBreakpoints = [];
        let sortedByLargestBreakpoints = [];
        let currentCol;

        for (let breakPoint in breakpoints) {
            parsedBreakpoints.push({
                col: breakpoints[breakPoint],
                media: breakPoint
            })
        }

        filteredBreakpoints = parsedBreakpoints.filter((breakpoint, i) => {
            return window.innerWidth >= breakpoint.media;
        });

        //Sort from high to low in screensize
        sortedByLargestBreakpoints = filteredBreakpoints.sort((a, b) => a.media > b.media ? -1 : 1);

        //If the screen is smaller than the smallest breakpoint property is undefined
        //Therefore we set 0 as the smallest breakpoint with the amount of col of the lowest media point.
        console.log(sortedByLargestBreakpoints)

        //Undefined when its lower than the smallest screensize
        if(sortedByLargestBreakpoints[0].col === undefined){
            currentCol = 2;
        }
        else{
            currentCol = sortedByLargestBreakpoints[0].col;
        }

        gridRef.current.style.gridTemplateColumns = `repeat(${currentCol}, 1fr)`;
    }

    useEffect(() => {
        window.addEventListener("resize", () => renderBreakPoints(props.breakpoints))
        return window.removeEventListener("resize", () => renderBreakPoints(props.breakpoints))
    }, [])

    return (
        <>
            <StyledGrid breakpoints={props.breakpoints} ref={gridRef} className={gridStyles.grid}>
                {React.Children.map(props.children, child => (
                    React.cloneElement(child, {style: {...child.props.style}})
                ))}

            </StyledGrid>
        </>

    );
}

export default Grid;
