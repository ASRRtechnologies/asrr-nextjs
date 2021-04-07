/** @jsxImportSource @emotion/react */
import React from 'react';
import {SectionProps} from "@/utillities/section/types";
import styled from "@emotion/styled";
import {mq} from "@/utillities/styles/global_variabels";

function Section(props: SectionProps) {
    /**
     * Consume only padding and children props, pass on the rest
     */
    const {padding, children, ...other} = props;

    const StyledSection = styled.section`
      height: auto;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: ${props.padding ? "25px 100px" : "none"}
      
      ${mq["sm"]}{
        padding: ${props.padding ? "25px" : "none"}
      }
    `

    return (
        <section css={StyledSection} {...other}>
            {children}
        </section>
    );
}

export default Section;
