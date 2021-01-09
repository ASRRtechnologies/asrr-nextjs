import React, { useEffect } from 'react'
import BigLanding from '@/landing/BigLanding'
import image from '../../public/assets/images/landing/drone-2.jpg'
import Clients from '../components/clients/Clients'
import Contact from '../components/contact/Preview'
import Why from '@/why-asrr/Why'
import PreviewBlog from '@/blog/Preview'
import PreviewServices from '@/services/Preview'
import PreviewPortfolio from '@/portfolio/Preview'
import { useHeader } from '../context/navigation/HeaderContext'
import TechStack from '@/techstack/TechStack'
import matter from 'gray-matter'
import Testimonials from '@/testimonials/Testimonials'

function Index ({ data, basePath }) {

	const header = useHeader()
	useEffect(() => {
		header.setHeaderWhite(false)
	}, [])

	return (
		<>
			{console.log(data)}
			<BigLanding title={data.landing.title} text={data.landing.text} image={image}/>
			<PreviewServices basePath={basePath} data={data.services_section}/>
			<TechStack basePath={basePath} data={data.technologies_section}/>
			<PreviewPortfolio data={data.portfolio_section} basePath={basePath}/>
			<Testimonials data={data.testimonials_section} basePath={basePath}/>
			<Why data={data.quality_section}/>
			<PreviewBlog data={data.blog_section} basePath={basePath}/>
			<Clients data={data.clients}/>
			<Contact/>
		</>

	)
}

export async function getStaticProps () {
	let content = await import(`public/content/pages/nl/homepage/homepage.md`)
	let parsedContent = matter(content.default)
	let data = parsedContent.data
	const basePath = `/content/pages/nl/homepage`
	return {
		props: { basePath, data },
	}
}

export default Index
