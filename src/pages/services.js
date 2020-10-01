import React from 'react'
import ServicePage from '../components/services/Services'
import Landing from '@/landing/ImageLanding'
import { useTheme } from '../context/theme/ThemeContext'
import image from '#/landing/portfolio/brandi-redd-aJTiW00qqtI-unsplash.jpg'
import Layout from '../components/layout/Layout'
import Application from '../components/layout/Application'

function Services (props) {
	const darkmode = useTheme().dark

	return (
		<Application>
			<Landing title="services.landing.title" text="portfolio.landing.text"
					 className={`${darkmode ? 'landing-overlay-dark' : 'landing-overlay-light'}`}
					 image={image} scrollToID="#services-page"/>
			<Layout>
				<ServicePage/>
			</Layout>
		</Application>
	)
}

export default Services
