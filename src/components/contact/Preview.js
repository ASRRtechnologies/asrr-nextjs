import React from 'react'
import Section from '@/layout/Section'
import Title from '@/titles/Title'
import Button from '@/Button'
import Fade from "react-reveal";

function Contact({title, className}) {
    return (
        <Section className={`contact-invitation-section ${className ? className : ""}`}>
            <div className={`contact preview ${title}`}>
                <Title className={`${title} title-button`} basePath={'contact.preview.header'}/>
                <Fade>
                    <Button custom to="/contact" title="buttons.contact"/>
                </Fade>
            </div>
        </Section>
    )
}

export default Contact


