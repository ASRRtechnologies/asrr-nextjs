import React, { useEffect } from 'react'
import ContactPage from '../components/contact/Contact'
import { useHeader } from '../context/navigation/HeaderContext'
import matter from 'gray-matter'
import PageLayout from '@/layout/PageLayout'
function Contact ({ data }) {

	const SEOProps = {
		title:"ASRR - Contact",
		content:"ASRR Levert innovatieve software oplossingen met een specialisme in de bouw"
	}

	const header = useHeader();
	useEffect(() => {
		header.setHeaderWhite(false)
	}, []);

	return (
		<PageLayout {...SEOProps}>
			<ContactPage data={data}/>
		</PageLayout>
	)
}

export async function getStaticProps () {
	//This is the portfolio page cms
	let content = await import(`public/content/contact/nl/contact.md`);
	let parsedContent = matter(content.default);
	let data = parsedContent.data;

	return {
		props: { data },
	}
}

export default Contact
