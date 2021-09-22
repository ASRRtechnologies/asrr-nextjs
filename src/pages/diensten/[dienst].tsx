import React, { useEffect } from 'react'
import PageLayout from '@/layout/PageLayout'
import { getAllServices } from '../../lib/api'
import matter from 'gray-matter'
import CaseArticle from '@/written/CaseArticle'
import useI18n from '../../hooks/use-i18n'
// @ts-ignore
import NL from '../../locales/nl'
import {useHeader} from "../../context/navigation/HeaderContext";
import {BasePaths} from "../../data/paths";

function Page ({content, basePath }) {

	const SEOProps = {
		title:`ASRR - Diensten - ${content.title}`,
		content:`${content.landing.title}`
	}

	//Need to set locale in the static page
	const i18n = useI18n();
	const header = useHeader();
	useEffect(() => {
		// @ts-ignore
		header.setHeaderWhite(true);
		i18n.locale('nl', NL);
	}, []);

	return (
		<PageLayout {...SEOProps}>
			<CaseArticle project={content} basePath={basePath}/>
		</PageLayout>
	)
}

export async function getStaticProps ({ params }) {
	const slug = params.dienst.toLowerCase();
	// @ts-ignore
	let data = await import(`public/content/services/posts/nl/${slug}/${slug}.md`);
	// let data = await import(`${BasePaths.SERVICES}/nl/${slug}/${slug}.md`);
	let content = matter(data.default).data;
	const basePath = `/content/services/nl/${slug.toLowerCase()}`;

	return {
		props: { basePath, content },
	}
}

export async function getStaticPaths () {

	const allServices = await getAllServices([
		'title',
	]);

	const paths = allServices.map(project => ({
		params: { dienst: project.title.toLowerCase() },
	}));

	return { paths, fallback: false }

}

export default Page
