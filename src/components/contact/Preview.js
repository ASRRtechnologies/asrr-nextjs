import React from 'react'
import Section from '@/layout/Section'
import Title from '@/text/Title'
import Button from '@/Button'
import Animation from '@/animation/Animation'

function Contact ({ title }) {
	return (
		<Section container="contact-invitation-section">
			<Animation animation="fade-up" delay="200">
				<div className={`contact preview ${title}`}>
					<Title className={`${title} title-button`} title={'contact.preview.title.header'}
						   text={'contact.preview.title.text'}/>
					<Button custom to="/contact" title="buttons.contact"/>
				</div>
			</Animation>
		</Section>
	)
}

export default Contact


