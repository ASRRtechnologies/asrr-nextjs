import React from 'react'
import Layout from '@/layout/Application'
import ReactMarkdown from 'react-markdown'
import SmallLanding from '@/landing/SmallLanding'

const ArticleTitle = ({ data }) => {
	return (
		<div>
			<h1>{data.title}</h1>
			<h2>{data.client}</h2>
		</div>
	)
}

const ArticleParagraph = ({ content }) => {
	return (
		<>
			<ReactMarkdown source={content}/>
		</>
	)
}

const ArticleSection = ({ content, media }) => {
	return (
		<div>
			<ArticleParagraph content={content}/>
			{/*{media.map(({image}) => <ArticleImage media={image}/>)}*/}
		</div>
	)
}

function Article ({ project, basePath }) {
	return (
		<Layout>
			<SmallLanding title={project.landing.title} text={project.landing.text} alt={project.landing.alt}
						  image={`${basePath}/${project.landing.image}`}
						  imageWebp={`${basePath}/${project.landing.image_webp}`}/>
			<ArticleTitle data={project.info}/>
			{project.article.map(({ content, media }) => <ArticleSection content={content} media={media}/>)}
		</Layout>
	)
}

export default Article
