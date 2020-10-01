import React, { useState } from 'react'
import ReadMore from '@/text/ReadMore'
import Input from '@/text/Input'
import logo from '#/logo/asrr-logo-spacing-white.svg'
import styled from '@emotion/styled'
import useI18n from '../../hooks/use-i18n'
import LinkedIn from '@/icons/LinkedIn'
import Facebook from '@/icons/Facebook'
import { toast } from 'react-toastify'
import Alert from '../alerts/Alert'
// import Download from '@axetroy/react-download';

// import file from "../../../public/assets/documents/file.pdf";

const Wrapper = styled('section')`background-color: ${props => props.theme.footer};`

function Footer (props) {
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

	const i18n = useI18n()
	return (
		<Wrapper className="layout footer-container">

			<div className="footer">
				<img alt="asrr-logo" src={logo}/>
				<div className="footer-navigation">
					<div className="grid">
						<h3>{i18n.t('footer.navigation')}</h3>
						<ReadMore inverted small to="/">{i18n.t('header.home')}</ReadMore>
						<ReadMore inverted small to="/portfolio">{i18n.t('header.case')}</ReadMore>
						<ReadMore inverted small to="/services">{i18n.t('header.services')}</ReadMore>
						<ReadMore inverted small to="/hire">{i18n.t('header.hire')}</ReadMore>
						<ReadMore inverted small to="/about">{i18n.t('header.about')}</ReadMore>
						<ReadMore inverted small to="/contact">{i18n.t('header.contact')}</ReadMore>
					</div>

					<div className="grid">
						<h3>Information</h3>
						<ReadMore inverted small to="/">{i18n.t('footer.faq')}</ReadMore>
						<ReadMore inverted small to="/">{i18n.t('footer.privacy')}</ReadMore>
						{/*<Download file={file} content="# hello world">*/}
							{/*<p className="animated-link-light">{i18n.t('footer.policy')}</p>*/}
						{/*</Download>*/}

					</div>

					<div className="grid">
						<h3>{i18n.t('footer.address')}</h3>
						<p>ASRR Tech</p>
						<a target="_blank" rel="noopener noreferrer" href="https://goo.gl/maps/fZqhC9FUVTpiEiCb7"
						   className="animated-link-light">
							{i18n.t('contact.address.street')} <br/>
							{i18n.t('contact.address.zipcode')} <br/>
							{i18n.t('contact.address.country')}
						</a>
						<a href="mailto:asrr@contact.nl" target="_blank" rel="noopener noreferrer"
						   className="animated-link-light">contact@asrr.nl</a>
					</div>

					<div className="grid">
						<h3>{i18n.t('footer.social_media')}</h3>
						<div className="footer-social-media">
							<a href="https://www.linkedin.com/company/asrr" target="_blank"
							   rel="noopener"><LinkedIn/></a>
							<a href="https://www.facebook.com/ASRRTech" target="_blank" rel="noopener"><Facebook/></a>
						</div>
					</div>

				</div>

				<div className="footer-newsletter">
					<h3>{i18n.t('footer.letter')}</h3>
					<form onSubmit={handleSubmit}>
						<Input onChange={(e) => handleChange(e.target)} value={email.name} className="full-width"
							   button={i18n.t('buttons.submit')}
							   placeholder={i18n.t('contact.form.email.placeholder').slice(0,-1)}/>
						{/*<ReadMore small action>{i18n.t('buttons.submit')}</ReadMore>*/}
					</form>
				</div>

				<div className="bottom">
					<p>Copyright ASRR</p>
					<p>{i18n.t('footer.design')}</p>
				</div>

			</div>
		</Wrapper>
	)
}

export default Footer
