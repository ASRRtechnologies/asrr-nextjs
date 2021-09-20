/** @jsxImportSource @emotion/react */
import React from 'react';
import {SubSectionProps} from "@/library/section/types";
import styled from "@emotion/styled";
import {mq, styles} from "@/library/styles/global_variabels";


const StyledSubSection = styled.div`
      width: 100%;
      height: auto;
      display: block;
      max-width: ${(props:SubSectionProps) => props.maxWidth ? styles.maxWidth : "100%"}; 
    `

function SubSection(props: SubSectionProps) {
    const {maxWidth, children} = props;

    return (
        <StyledSubSection maxWidth={maxWidth} {...props}>
            {children}
        </StyledSubSection>
    );
}

export default SubSection;
