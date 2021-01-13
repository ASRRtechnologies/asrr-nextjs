import React, {useEffect} from 'react'
import BlogPage from '@/blog/Blog'
import Contact from "@/contact/Preview";
import {useHeader} from "../context/navigation/HeaderContext";
import matter from 'gray-matter'
import { getAllArticles } from '../lib/api'
import Application from '@/layout/Application'

function Portfolio({ data, allArticles}) {

	const SEOProps = {
		title:"ASRR - Blog",
		content:"ASRR Levert innovatieve software oplossingen met een specialisme in de bouw"
	}

	//Todo add allNews to AllArticles array

	const header = useHeader();

	useEffect(() => {
		header.setHeaderWhite(false)
	}, []);


	return (
		<Application {...SEOProps}>
			<BlogPage data={data} allBlogs={allArticles} />
			<Contact/>
		</Application>
	)
}

export async function getStaticProps () {
	//This is the portfolio page cms
	let content = await import(`public/content/blog/nl/blog.md`);
	let parsedContent = matter(content.default);
	let data = parsedContent.data;

	const allArticles = getAllArticles([
		'title',
		'slug',
		'card',
		'info',
		'type'
	]);

	return {
		props: {allArticles, data },
	}
}

export default Portfolio
