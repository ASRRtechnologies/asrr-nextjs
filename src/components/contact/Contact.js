import React from 'react'
import Section from '../layout/Section'
import Title from '../text/Title'
import ReadMore from '@/text/ReadMore'
import Input from '@/text/Input'
import Map from '@/contact/Map'

function Contact ({ big }) {
	return (
		<Section>
			<Title big={big} title={'Contact'} text="lorem ipsum hahahahaha"/>
			<div className="contact">
				<form className="form">
					<Input className="no-margin" name="name" label="Name *" type="text" required={true} placeholder="Name"/>
					<Input name="organization" label="Organization Name" type="text" required={true}
						   placeholder="Organization"/>
					<Input name="email" label="Email *" type="email" placeholder="Email"/>
					<Input name="message" textArea={true} label="Message *" type="text" required={true} placeholder="Name"/>
					<ReadMore margin action text="Send Message"/>
				</form>
				<div className="map-container">
					<Map/>
				</div>
			</div>
		</Section>
	)
}

export default Contact
