import React from 'react'
import ReactMarkdown from 'react-markdown'
import SmallLanding from '@/landing/SmallLanding'
import video from '../../../public/assets/videos/demo/rdp/2-fa-high.mp4'
import Contact from '@/contact/Preview'
import Section from '@/layout/Section'
import Fade from 'react-reveal/Fade'
import {
	FacebookIcon,
	FacebookShareButton,
	LinkedinIcon,
	LinkedinShareButton,
	TwitterIcon,
	TwitterShareButton,
} from 'react-share'

const fadeDelay = 200

const ArticleVideo = ({ media, basePath }) => {
	const { video, reference, description } = media
	return (
		<Fade delay={fadeDelay} bottom>
			<div className="article-media aspect-ratio-1920">

				<div className="article-media-aspect-ratio">
					<video autoPlay muted loop id="myVideo">
						<source src={`${basePath}/${video}`} type="video/mp4"/>
					</video>
				</div>

				<div className="article-media-description">
					<p className="font-general">{description}</p>
					<a className="font-article-reference" href={reference} target="_blank" rel="noopener">{reference}</a>
				</div>

			</div>
		</Fade>
	)
}

const ArticleImage = ({ media, basePath }) => {
	const { image, image_webp, alt, reference, description } = media

	return (
		<Fade delay={fadeDelay} bottom>
			<div className="article-media-container">

				<div className="article-media aspect-ratio-1920">
					<picture>
						<source srcSet={`${basePath}/${image_webp}`} type="image/webp"/>
						<source srcSet={`${basePath}/${image}`} type="image/jpeg"/>
						<img src={`${basePath}/${image}`} alt={alt} className="zoom-in-effect"/>
					</picture>
				</div>

				<div className="article-media-description">
					<p className="font-general">{description}</p>
					<a className="font-article-reference" href={reference}>{reference}</a>
				</div>
			</div>
		</Fade>
	)
};

const ArticleLinks = ({}) => {
	return (
		<div className="article-links">

			<FacebookShareButton url={window.location.pathname}>
				<FacebookIcon round size={50}/>
			</FacebookShareButton>

			<LinkedinShareButton url={window.location.pathname}>
				<LinkedinIcon round size={50}/>
			</LinkedinShareButton>

			<TwitterShareButton url={window.location.pathname}>
				<TwitterIcon round size={50} />
			</TwitterShareButton>

		</div>
	)
};

const ArticleTitle = ({ data }) => {
	return (
		<Fade delay={fadeDelay}>
			<div className="article-title">
				<h1 className="font-article-title">{data.title}</h1>
				<h2 className="font-article-info">Client: {data.client}</h2>
			</div>
		</Fade>
	)
}

const ArticleSection = ({ basePath, content, media }) => {
	return (
		<div className="article-section">
			<Fade delay={fadeDelay} bottom>
				<div className="article-markdown">
					<ReactMarkdown source={content}/>
				</div>
			</Fade>
			{media && (
				<>
					{media.images?.map((image) => <ArticleImage basePath={basePath} media={image}/>)}
					{media.video?.map((video) => <ArticleVideo basePath={basePath} media={video}/>)}
				</>
			)}
		</div>
	)
};

const ArticleBody = ({ basePath, project }) => {
	return (
		<div className="article-body">
			<ArticleLinks/>
			<div className="article-content">
				<ArticleTitle data={project.info}/>
				{project.article.map(
					({ content, media }) => <ArticleSection basePath={basePath} content={content} media={media}/>)}
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

			<Section>
				<ArticleBody basePath={basePath} project={project}/>
			</Section>
			<Contact/>
		</>
	)
}

export default Article
