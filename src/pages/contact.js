import React, { useEffect } from 'react'
import ContactPage from '../components/contact/Contact'
import { useHeader } from '../context/navigation/HeaderContext'
import matter from 'gray-matter'

function Contact ({ data }) {
	const header = useHeader();
	useEffect(() => {
		header.setHeaderWhite(false)
	}, []);

	return (
		<>
			<ContactPage data={data}/>
		</>
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
