import React, { useEffect } from 'react'
import ServicePage from '../components/services/Services'
import Contact from '@/contact/Preview'
import { useHeader } from '../context/navigation/HeaderContext'
import CheckmarkServices from '@/services/CheckmarkServices'
import matter from 'gray-matter'
import Application from '@/layout/Application'

function Diensten ({data}) {

	const SEOProps = {
		title:"ASRR - Diensten",
		content:"ASRR Levert innovatieve software oplossingen met een specialisme in de bouw"
	}

	const header = useHeader();
	useEffect(() => {
		header.setHeaderWhite(false)
	}, []);

	return (
		<Application {...SEOProps}>
			<CheckmarkServices data={data}/>
			<ServicePage data={data}/>
			<Contact/>
		</Application>
	)
}

export async function getStaticProps () {
	//This is the portfolio page cms
	let content = await import(`public/content/service_page/nl/services.md`);
	let parsedContent = matter(content.default);
	let data = parsedContent.data;

	return {
		props: { data },
	}
}

export default Diensten
