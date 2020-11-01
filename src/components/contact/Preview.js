import React from 'react'
import Section from '@/layout/Section'
import Title from '@/titles/Title'
import Button from '@/Button'
import Animation from '@/animation/Animation'
import Fade from "react-reveal";

function Contact ({ title, className }) {
	return (
		<Section className={`contact-invitation-section ${className ? className : ""}`}>
			<Fade animation="fade-up" delay="200">
				<div className={`contact preview ${title}`}>
					<Title className={`${title} title-button`} basePath={'contact.preview.header'}
					/>
					<Button custom to="/contact" title="buttons.contact"/>
				</div>
			</Fade>
		</Section>
	)
}

export default Contact


