import React, {useEffect} from 'react'
import BlogPage from '@/modules/Blog/Blog'
import Contact from "@/contact/Preview";
import {useHeader} from "../context/navigation/HeaderContext";
import matter from 'gray-matter'
import { getAllArticles } from '../lib/api'
import PageLayout from '@/layout/PageLayout'
import Banner from "@/modules/shared/landing/Banner";

const SEOProps = {
	title:"ASRR - Blog",
	content:"ASRR Levert innovatieve software oplossingen met een specialisme in de bouw"
}

//Todo add allNews to AllArticles array
function Portfolio({ content, allArticles}) {
	const {title, text} = content.page_title;
	const header = useHeader();
	const customBasePath = (projectName: string) => `/content/written/artikel/nl/${projectName}`;

	useEffect(() => {
		// @ts-ignore
		header.setHeaderWhite(false)
	}, []);

	return (
		<PageLayout {...SEOProps}>
			<Banner title={title} content={text}/>
			<BlogPage data={content} allBlogs={allArticles} customBasePath={customBasePath}/>
			<Contact title={undefined} className={undefined}/>
		</PageLayout>
	)
}

export async function getStaticProps () {
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
