import React, {useEffect} from 'react';
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
    col?: number,
    children: React.ReactElement[] | React.ReactElement;
    breakpoints?: Breakpoint
}

const StyledGrid = styled(`div`)<GridProps>`
  grid-template-columns: ${props => props.col ? `repeat(${props.col}, 1fr)` : "1fr 1fr"};
  grid-row-gap: 50px;
  grid-column-gap: 30px;
  width: 100%;
  max-width: ${maxWidth};
  justify-items: center;
 
`

const renderBreakPoints = (breakpoints: Breakpoint) => {
    let array = [];
    let col;
    //Get object with correct column number and breakpoint as array
    for (let breakpoint in breakpoints) {
        array.push({
            media: parseInt(breakpoint),
            col: breakpoints[breakpoint],
            shouldBreak: useMedia(`(min-width: ${breakpoint}px)`)
        })
    }

    //Sort from high to low by
    array.sort((a, b) => a.media > b.media ? -1 : 1);

    //Get the first element where break is true
    array.some((e) => {
        col = e.col
        return e.shouldBreak
    })

    return console.log(col);
}

function Grid(props: GridProps) {

    useEffect(() => {
        window.addEventListener("resize", () => renderBreakPoints(props.breakpoints))
        return window.removeEventListener("resize", () => renderBreakPoints(props.breakpoints))
    }, [])

    return (
        <>
            <StyledGrid col={props.col} className={gridStyles.grid}>
                {React.Children.map(props.children, child => (
                    React.cloneElement(child, {style: {...child.props.style}})
                ))}

            </StyledGrid>
        </>

    );
}

export default Grid;
