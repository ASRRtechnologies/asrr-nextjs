import React, { useEffect } from 'react'
import Layout from '@/layout/Application'
import { getAllServices } from '../../lib/api'
import matter from 'gray-matter'
import CaseArticle from '@/written/CaseArticle'
import useI18n from '../../hooks/use-i18n'
import NL from '../../locales/nl'

function Page ({data, basePath }) {

	//Need to set locale in the static page
	const i18n = useI18n()
	useEffect(() => {
		i18n.locale('nl', NL)
	}, []);

	console.log(data);

	return (
		<Layout>
			<CaseArticle project={data} basePath={basePath}/>
		</Layout>
	)
}

export async function getStaticProps ({ params }) {
	const { dienst } = params
	let content = await import(`public/content/services/nl/${dienst.toLowerCase()}/${dienst.toLowerCase()}.md`)
	let parsedContent = matter(content.default)
	let data = parsedContent.data
	const basePath = `/content/services/nl/${dienst.toLowerCase()}`

	return {
		props: { basePath, data },
	}
}

export async function getStaticPaths () {

	const allServices = await getAllServices([
		'title',
	])

	const paths = allServices.map(project => ({
		params: { dienst: project.title.toLowerCase() },
	}))

	return { paths, fallback: false }

}

export default Page
