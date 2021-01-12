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
import { getAllArticles, getAllCases, getAllNews } from '../lib/api'

function Index ({ homepage, basePath, allCases, allArticles, allNews }) {

	const header = useHeader()

	useEffect(() => {
		header.setHeaderWhite(false)
	}, [])

	const getCases = () => {
		return allCases.filter((project) => {
			console.log(project);
			return project.title.toLowerCase() === 'hes' || project.title.toLowerCase() === 'nwo';
			// 	project.title.toLowerCase() === 'hes'
		})
	}

	getCases();

	const getBlogs = () => {
		return allArticles.filter(
			(article) => article.title.toLowerCase() === 'itaas' || article.title.toLowerCase() === 'microservices' ||
				article.title.toLowerCase() === 'heijmans-configurator')

		// let news = allNews.filter((artnews) => {
		// 	console.log(artnews)
		// })

		// let selectedBlogs = [...articles, ...news]

	}

	getBlogs()

	return (
		<>
			<BigLanding title={homepage.landing.title} text={homepage.landing.text} button={homepage.landing.button}
						image={image}/>
			<PreviewServices basePath={basePath} data={homepage.services_section}/>
			<TechStack basePath={basePath} data={homepage.technologies_section}/>
			<PreviewPortfolio data={homepage.portfolio_section} selectedProjects={getCases()}/>
			<Testimonials data={homepage.testimonials_section} basePath={basePath}/>
			<Why data={homepage.quality_section}/>
			<PreviewBlog data={homepage.blog_section} selectedBlogs={getBlogs()}/>
			<Clients data={homepage.clients}/>
			<Contact/>
		</>
	)
}

export async function getStaticProps () {
	let content = await import(`public/content/home/nl/home.md`)
	let parsedContent = matter(content.default)
	let homepage = parsedContent.data
	const basePath = `/content/home/nl`

	const allCases = getAllCases([
		'title',
		'slug',
		'card',
		'info',
	])

	const allArticles = getAllArticles([
		'title',
		'slug',
		'card',
		'info',
		'type'
	])

	const allNews = getAllNews([
		'title',
		'slug',
		'card',
		'info',
		'type'
	])

	return {
		props: { basePath, homepage, allCases, allArticles, allNews },
	}
}

export default Index
