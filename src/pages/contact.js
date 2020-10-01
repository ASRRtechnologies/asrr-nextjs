import React from 'react'
import Landing from '@/landing/ImageLanding'
import ContactPage from '../components/contact/Contact'
import { useTheme } from '../context/theme/ThemeContext'
import image from '#/landing/portfolio/brandi-redd-aJTiW00qqtI-unsplash.jpg'
import Layout from '../components/layout/Layout'
import Application from '../components/layout/Application'

function Contact () {
	const darkmode = useTheme().dark

	return (
		<Application>
			<Landing title="contact.landing.title" text="contact.landing.text"
					 className={`${darkmode ? 'landing-overlay-dark' : 'landing-overlay-light'}`}
					 image={image} scrollToID="#contact-page"/>
			<Layout>
				<ContactPage/>
			</Layout>
		</Application>
	)
}

export default Contact
