import React, {useEffect} from 'react'
import BlogPage from '@/blog/Blog'
import Contact from "@/contact/Preview";
import {useHeader} from "../context/navigation/HeaderContext";
import matter from 'gray-matter'
import { getAllArticles } from '../lib/api'
import PageLayout from '@/layout/PageLayout'

const SEOProps = {
	title:"ASRR - Blog",
	content:"ASRR Levert innovatieve software oplossingen met een specialisme in de bouw"
}

function Portfolio({ content, allArticles}) {

	//Todo add allNews to AllArticles array

	const header = useHeader();

	useEffect(() => {
		// @ts-ignore
		header.setHeaderWhite(false)
	}, []);


	return (
		<PageLayout {...SEOProps}>
			<BlogPage data={content} allBlogs={allArticles} />
			<Contact title={undefined} className={undefined}/>
		</PageLayout>
	)
}

export async function getStaticProps () {
	//This is the portfolio page cms
	// @ts-ignore
	let data = await import(`public/content/blog/nl/blog.md`);
	let content = matter(data.default).data;

	const allArticles = getAllArticles([
		'title',
		'slug',
		'card',
		'info',
		'type'
	]);

	return {
		props: {allArticles, content },
	}
}

export default Portfolio
