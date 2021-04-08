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

    const paddingSmall = "25px";

    const paddingMedium = "50px 75px";

    const paddingBig = "100px 75px";

    const StyledSection = styled.section`
      height: auto;
      width: 100vw;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: ${props.padding ? paddingSmall : "none"};
      
      ${mq["sm"]}{
        padding: ${props.padding ? paddingMedium : "none"}
      }

      ${mq["lg"]}{
        padding: ${props.padding ? paddingBig : "none"}
      }
      
    `

    return (
        <StyledSection {...other}>
            {children}
        </StyledSection>
    );
}

export default Section;
