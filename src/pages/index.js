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

	const header = useHeader();
	const casesPath = "content/written/case/nl";
	const newsPath = "content/written/nieuws/nl";
	const articlesPath = "content/written/artikel/nl";

	useEffect(() => {
		header.setHeaderWhite(false)
	}, [])

	const getCases = () => {
		return allCases.filter((project) => {
			return project.title.toLowerCase() === "form" || project.title.toLowerCase() ==="nwo" || project.title.toLowerCase() === "hes";
		});
	}

	const getBlogs= () => {
		let articles = allArticles.filter((article) => article.title.toLowerCase() === "itaas");

		let news = allNews.filter((artnews) => {
			console.log(artnews);
		})

		let selectedBlogs = [...articles, ...news];

		return allCases.filter((project) => {
			return project.title.toLowerCase() === "form" || project.title.toLowerCase() ==="nwo" || project.title.toLowerCase() === "hes";
		});


	}

	getBlogs();


	return (
		<>
			<BigLanding title={homepage.landing.title} text={homepage.landing.text} button={homepage.landing.button} image={image}/>
			<PreviewServices basePath={basePath} data={homepage.services_section}/>
			<TechStack basePath={basePath} data={homepage.technologies_section}/>
			<PreviewPortfolio data={homepage.portfolio_section} basePath={casesPath} selectedProjects={getCases()}/>
			<Testimonials data={homepage.testimonials_section} basePath={basePath}/>
			<Why data={homepage.quality_section}/>
			<PreviewBlog data={homepage.blog_section} basePath={basePath}/>
			<Clients data={homepage.clients}/>
			<Contact/>
		</>
	)
}

export async function getStaticProps () {
	let content = await import(`public/content/home/nl/home.md`);
	let parsedContent = matter(content.default);
	let homepage = parsedContent.data;
	const basePath = `/content/home/nl`;

	const allCases = getAllCases([
		'title',
		'slug',
		'card',
		'info'
	]);

	const allArticles = getAllArticles([
		'title',
		'slug',
		'card',
		'info'
	]);

	const allNews = getAllNews([
		'title',
		'slug',
		'card',
		'info'
	]);


	return {
		props: { basePath, homepage, allCases, allArticles, allNews },
	}
}

export default Index
