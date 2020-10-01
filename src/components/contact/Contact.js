import React, { useState } from 'react'
import Section from '../layout/Section'
import Title from '../text/Title'
import Input from '@/text/Input'
import Map from '@/contact/Map'
import useI18n from '../../hooks/use-i18n'
import styled from '@emotion/styled'
import { toast } from 'react-toastify'
import Alert from '@/alerts/Alert'
import Button from '@/Button'
import Animation from '@/animation/Animation'

const Card = styled('div')`
      box-shadow: ${props => props.theme.card.shadow};
`

const emailRegex = '(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])'

function Contact ({ big }) {
	const i18n = useI18n()
	const recipient = 'contact@asrr.nl'
	const [email, setEmail] = useState({ body: '', subject: '', userEmail: '', organization: '', name: '' })

	const handleChange = ({ name, value }) => setEmail({ ...email, [name]: value })
	const notify = (title, text, type) => toast(<Alert title={title} text={text} {...type}/>,
		{ position: toast.POSITION.TOP_CENTER })

	const handleSubmit = (event) => {

		let emailObject = {
			body: `from: ${email.userEmail}, name:${email.name}, subject:${email.subject}, organization: ${email.organization}, message: ${email.body}`,
			subject: email.subject,
			recipient: recipient,
		}

		fetch(process.env.NEXT_PUBLIC_API_BASE_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(emailObject),
		}).then(function (response) {
			if (response.ok) {
				notify('user_notifications.contact.success.title', 'user_notifications.contact.success.text',
					{ success: true })
				console.log('notified')
				//Clear input when successfully sent
				setEmail({})
			} else {
				response.json().then(function (object) {
					console.log(object)
					console.log(object.propertyErrors)
					console.log(response)
					notify('user_notifications.contact.error.title', 'user_notifications.contact.error.text',
						{ error: true })

				})
				throw new Error(response.statusText)
			}
		}).catch(error => {
			notify('user_notifications.contact.error.title', 'user_notifications.contact.error.text', { error: true })
		})
		event.preventDefault()
	}

	return (
		<Section id="contact-page" className="padding-bottom">
			<Animation animation="fade-up" delay="200">
				<Title title={'contact.title.header'} text={'contact.title.text'}/>
				<div className="contact">
					<form onSubmit={handleSubmit} id="contact-form" className="form">
						<Input onChange={(e) => handleChange(e.target)} value={email.name} className="no-margin"
							   name="name" type="text"
							   required={true} placeholder={i18n.t('contact.form.name.placeholder')}/>
						<Input onChange={(e) => handleChange(e.target)} value={email.subject} className="no-margin"
							   name="subject" type="text"
							   required={true} placeholder={i18n.t('contact.form.subject.placeholder')}/>
						<Input onChange={(e) => handleChange(e.target)} value={email.organization} name="organization"
							   type="text"
							   placeholder={i18n.t('contact.form.organization.placeholder')}/>
						<Input required={true} pattern={emailRegex} onChange={(e) => handleChange(e.target)}
							   value={email.userEmail}
							   name="userEmail" type="email" placeholder={i18n.t('contact.form.email.placeholder')}/>
						<Input onChange={(e) => handleChange(e.target)} value={email.body}
							   name="body" last textArea={true} type="text"
							   required={true} placeholder={i18n.t('contact.form.message.placeholder')}/>
						<Button className="auto" title="buttons.submit"/>

						<div className="contact-adress">
							<p>{i18n.t("contact.address.street")}</p>
							<p>{i18n.t("contact.address.zipcode")}</p>
							<p>{i18n.t("contact.address.country")}</p>

							<a target="_blank" rel="noopener noreferrer" href="https://goo.gl/maps/fZqhC9FUVTpiEiCb7"
							   className="link">{i18n.t("contact.address.route")}</a>
							<a href="mailto:asrr@contact.nl" target="_blank" rel="noopener noreferrer" className="link">Email:
								contact@asrr.nl</a>
						</div>

						<Card className="map-container">
							<Map/>
						</Card>

					</form>
				</div>
			</Animation>
		</Section>
	)
}

export default Contact
