import React from 'react'
import Section from '@/layout/Section'
import Title from '@/titles/Title'
import Button from '@/Button'
import Fade from "react-reveal";
import styled from "@emotion/styled";

const Wrapper = styled(Section)`
        background: ${props => props.theme.home.contact};
        h1, h2, h3, p {
          color:white !important;
        }
 }`;

function Contact({title, className}) {
    return (
        <Wrapper className={`contact-invitation-section ${className ? className : ""}`}>
            <div className={`contact preview ${title}`}>
                <Title className={`${title} title-button`} basePath={'contact.preview.header'}/>
                <Fade>
                    <Button custom to="/contact" title="buttons.contact"/>
                </Fade>
            </div>
        </Wrapper>
    )
}

export default Contact


