import React, { useEffect } from 'react'
import ServicePage from '../components/services/Services'
import Contact from '@/contact/Preview'
import { useHeader } from '../context/navigation/HeaderContext'
import CheckmarkServices from '@/services/CheckmarkServices'
import matter from 'gray-matter'
import PageLayout from '@/layout/PageLayout'


const SEOProps = {
	title:"ASRR - Diensten",
	content:"ASRR Levert innovatieve software oplossingen met een specialisme in de bouw"
}

function Diensten ({content}) {

	const header = useHeader();
	useEffect(() => {
		// @ts-ignore
		header.setHeaderWhite(false)
	}, []);

	return (
		<PageLayout {...SEOProps}>
			<CheckmarkServices data={content}/>
			<ServicePage data={content}/>
			<Contact/>
		</PageLayout>
	)
}

export async function getStaticProps () {
	//This is the portfolio page cms
	// @ts-ignore
	let data = await import(`public/content/services/nl/services.md`);
	// let data = await import(`${BasePaths.SERVICE_PAGE}/nl/services.md`);
	let content = matter(data.default).data;

	return {
		props: { content },
	}
}

export default Diensten
