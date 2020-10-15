import React, { useEffect } from 'react'
import Landing from '@/landing/ImageLanding'
import image from '../../public/assets/images/landing/portfolio/brandi-redd-aJTiW00qqtI-unsplash.jpg'
import { useTheme } from '../context/theme/ThemeContext'
import PortfolioPage from '@/portfolio/Portfolio'
import Application from '@/layout/Application'
import Layout from '@/layout/Layout'

function Portfolio () {
	const darkmode = useTheme().dark

	return (
		<Application>
			{/*<Landing title="portfolio.landing.title" text="portfolio.landing.text"*/}
			{/*		 className={`${darkmode ? 'landing-overlay-dark' : 'landing-overlay-light'}`}*/}
			{/*		 image={image} scrollToID="#portfolio-page"/>*/}
			<Layout>
				<PortfolioPage/>
			</Layout>
		</Application>
	)
}

export default Portfolio
