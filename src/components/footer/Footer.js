import React, { useState } from 'react'
import logo from '#/logo/asrr-logo-spacing-white.svg'
import useI18n from '../../hooks/use-i18n'
import LinkedIn from '@/icons/LinkedIn'
import Facebook from '@/icons/Facebook'
import { useSnackbar } from 'notistack'
import Section from '@/layout/Section'
import Link from 'next/link'

function Footer (props) {
	const [email, setEmail] = useState({ body: '', subject: '', userEmail: '', organization: '', name: '' })

	const handleChange = ({ name, value }) => setEmail({ ...email, [name]: value })
	const { enqueueSnackbar, closeSnackbar } = useSnackbar()

	const handleSubmit = (event) => {

		let emailObject = {
			body: `from: ${email.userEmail}, name:${email.name}, subject:${email.subject}, organization: ${email.organization}, message: ${email.body}`,
			subject: email.subject,
			recipient: recipient,
		}

		// console.log(JSON.stringify(emailObject))

		fetch('https://mail.api.asrr-tech.com/mail/send/simple', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(emailObject),
		}).then(function (response) {
			if (response.ok) {
				enqueueSnackbar('user_notifications.contact.success.title', { variant: 'success' })
				setEmail({})
			} else {
				response.json().then(function (object) {
					console.log(object)
					console.log(object.propertyErrors)
					console.log(response)
					enqueueSnackbar('user_notifications.contact.error.title', { error: true })

				})
				throw new Error(response.statusText)
			}
		}).catch(error => {
			enqueueSnackbar('user_notifications.contact.error.title', { error: true })
		})
		event.preventDefault()
	}

	const i18n = useI18n()

	const AnimatedLink = ({ text, to }) => {
		return (
			<Link href={to}>
				<a className={`font-general read-more animated-link-light`}>
					{i18n.t(text)}
				</a>
			</Link>
		)
	}

	return (
		<Section className="footer-section">

			<div className="footer">
				<img alt="asrr-logo" src={logo}/>

				<div className="footer-navigation">

					<div className="grid">
						<h1 className="font-subheader">{i18n.t('footer.navigation')}</h1>
						<AnimatedLink text="header.home" to="/"/>
						<AnimatedLink text="header.portfolio" to="/portfolio"/>
						<AnimatedLink text="header.services" to="/services"/>
						<AnimatedLink text="header.about" to="/over"/>
						<AnimatedLink text="header.contact" to="/contact"/>
					</div>

					<div className="grid">
						<h1 className="font-subheader">{i18n.t('footer.information')}</h1>

						<a href="/assets/documents/file.pdf" target="_blank" rel="noopener noreferrer"
						   className="animated-link-light text">{i18n.t('footer.policy')}
						</a>

					</div>

					<div className="grid">
						<h1 className="font-subheader">{i18n.t('footer.contact')}</h1>
						<p>ASRR Tech</p>

						<a target="_blank" rel="noopener noreferrer" href="https://goo.gl/maps/fZqhC9FUVTpiEiCb7"
						   className="animated-link-light text">
							{i18n.t('contact.address.street')} <br/>
							{i18n.t('contact.address.zipcode')} <br/>
							{i18n.t('contact.address.country')}
						</a>

						<a href="mailto:contact@asrr.nl" target="_blank" rel="noopener noreferrer"
						   className="animated-link-light text">
							contact@asrr.nl
						</a>

					</div>

					<div className="grid">
						<h1 className="font-subheader">{i18n.t('footer.social_media')}</h1>

						<div className="footer-social-media">
							<a className="footer-icons" href="https://www.linkedin.com/company/asrr" target="_blank"
							   rel="noopener"><LinkedIn/>
							</a>
							<a className="footer-icons" href="https://www.facebook.com/ASRRTech" target="_blank"
							   rel="noopener">
								<Facebook/>
							</a>
						</div>

					</div>

				</div>

				{/*<div className="footer-newsletter">*/}
				{/*    <h1 className="small-header">{i18n.t('footer.letter')}</h1>*/}
				{/*    <form onSubmit={handleSubmit}>*/}
				{/*        <Input onChange={(e) => handleChange(e.target)} value={email.name} className="full-width"*/}
				{/*               button={i18n.t('buttons.submit')}*/}
				{/*               placeholder={i18n.t('contact.form.email.placeholder')}/>*/}
				{/*    </form>*/}
				{/*</div>*/}

				<div className="bottom">
					<p className="label">Copyright ASRR</p>
					<p className="label">{i18n.t('footer.design')}</p>
				</div>

			</div>
		</Section>
	)
}

export default Footer
