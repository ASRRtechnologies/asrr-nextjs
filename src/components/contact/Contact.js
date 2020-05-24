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
					<Input className="no-margin" name="name" text label="Name *" type="text" required={true} placeholder="Name"/>
					<Input name="organization" text label="Organization Name" type="text" required={true}
						   placeholder="Organization"/>
					<Input name="email" text label="Email *" type="email" placeholder="Email"/>
					<Input name="message" label="Message *" type="text" required={true} placeholder="Name"/>
					<ReadMore action text="Send Message"/>
				</form>
				<div className="map-container">
					<Map/>
				</div>

				{/*<div className="image">*/}
				{/*    <h2>Get in touch!</h2>*/}
				{/*    <img src={spaceman} alt="spaceman"/>*/}

				{/*</div>*/}
			</div>

		</Section>
	)
}

export default Contact
