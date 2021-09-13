import React, {useState} from "react";
import styled from "@emotion/styled";

const Button = styled.div`
  display: block;
  width: 100%;
`

const Content = styled.div<{isExpanded:boolean}>`
  display: ${(props) => props.isExpanded ? "block" : "none"}
`

// const HeadingStyled = styled("h2")<{emphasized: boolean}>`
//   ${props => props.emphasized && `
//     display: inline;
//     padding-top: 10px;
//     padding-right: 30px;
//   `}
// `;

//Source: https://www.30secondsofcode.org/react/s/collapse

const Accordion = ({collapsed, children}) => {
    return (
        <>
            <Content isExpanded={collapsed} aria-expanded={collapsed}>
                 {children}
            </Content>
        </>
    );
};

export default Accordion
