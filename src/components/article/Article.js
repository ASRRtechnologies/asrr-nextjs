import React from 'react'
import ReactMarkdown from 'react-markdown'
import SmallLanding from '@/landing/SmallLanding'
import ArticleContent from '@/article/ArticleContent'
import video from '../../../public/assets/videos/demo/rdp/2-fa-high.mp4'
import Contact from '@/contact/Preview'

const ArticleVideo = ({ media, basePath }) => {
	const {video,reference, description} = media;
	return (
		<div className="article-media aspect-ratio-1920">

			<div className="article-media-aspect-ratio">
				<video autoPlay muted loop id="myVideo">
					<source src={`${basePath}/${video}`} type="video/mp4"/>
				</video>
			</div>

			<div className="article-media-description">
				<p>{description}</p>
				<a className="font-reference" href={reference} target="_blank" rel="noopener">{reference}</a>
			</div>

		</div>
	)
}

const ArticleImage = ({media, basePath}) => {
	const {image, image_webp, alt, reference, description} = media;

	return (
		<div className="article-media-container">

			<div className="article-media aspect-ratio-1920">
				<picture>
					<source srcSet={`${basePath}/${image_webp}`} type="image/webp"/>
					<source srcSet={`${basePath}/${image}`} type="image/jpeg"/>
					<img src={`${basePath}/${image}`} alt={alt} className="zoom-in-effect"/>
				</picture>
			</div>

			<div className="article-media-description">
				<p>{description}</p>
				<a className="font-reference" href={reference}>{reference}</a>
			</div>

		</div>
	)
}

const ArticleLinks = ({ data }) => {
	return (
		<div className="article-links">
			<h1>hey1</h1>
			<h2>hey2</h2>
		</div>
	)
}


const ArticleTitle = ({ data }) => {
	return (
		<div className="article-title">
			<h1 className="font-title">{data.title}</h1>
			<h2 className="font-header">{data.client}</h2>
		</div>
	)
}

const ArticleSection = ({basePath, content, media }) => {
	return (
		<div className="article-section">
			<ReactMarkdown source={content}/>
			{media && (
				<>
					{media.images?.map((image) => <ArticleImage basePath={basePath} media={image}/>)}
					{media.video?.map((video) => <ArticleVideo basePath={basePath} media={video}/>)}
				</>
			)}
		</div>
	)
}


const ArticleBody = ({ basePath, project }) => {
	return (
		<div className="article-body">
			<ArticleLinks/>
			<div className="article-content">
				<ArticleTitle data={project.info}/>
				{project.article.map(({ content, media }) => <ArticleSection basePath={basePath} content={content} media={media}/>)}
			</div>
		</div>
	)
}



function Article ({ project, basePath }) {
	return (
		<>
			<SmallLanding title={project.landing.title} text={project.landing.text} alt={project.landing.alt}
						  image={`${basePath}/${project.landing.image}`}
						  imageWebp={`${basePath}/${project.landing.image_webp}`}/>

			<ArticleBody basePath={basePath} project={project}/>
			<Contact/>
		</>
	)
}

export default Article
