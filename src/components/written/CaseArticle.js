import React from 'react'
import ReactMarkdown from 'react-markdown'
import SmallLanding from '@/landing/SmallLanding'
import video from '../../../public/assets/videos/demo/rdp/2-fa-high.mp4'
import Contact from '@/contact/Preview'
import Section from '@/layout/Section'
import { Fade } from 'react-awesome-reveal'
import {
	FacebookIcon,
	FacebookShareButton,
	LinkedinIcon,
	LinkedinShareButton,
	TwitterIcon,
	TwitterShareButton,
} from 'react-share'

const fadeDelay = 200;

const ArticleVideo = ({ media, basePath }) => {
	const { video, reference, description } = media;
	return (
		<Fade triggerOnce damping={0.3} direction="up" className="article-animation-fade-container">
			<div className="article-media-container">
				<div className="article-media aspect-ratio-1920">
					<video autoPlay muted loop id="myVideo">
						<source src={`${basePath}/${video}`} type="video/mp4"/>
					</video>
				</div>

				<div className="article-media-description">
					<p className="font-subheader">{description}</p>
					<a className="font-reference" href={reference} target="_blank" rel="noopener">{reference}</a>
				</div>
			</div>
		</Fade>
	)
};

const ArticleImage = ({ media, basePath }) => {
	const { image, image_webp, alt, reference, description } = media;

	return (
		<Fade triggerOnce damping={0.3} direction="up" className="article-animation-fade-container">
			<div className="article-media-container">
				<div className="article-media aspect-ratio-1920">
					<picture>
						<source srcSet={`${basePath}/${image_webp}`} type="image/webp"/>
						<source srcSet={`${basePath}/${image}`} type="image/jpeg"/>
						<img src={`${basePath}/${image}`} alt={alt} className="zoom-in-effect"/>
					</picture>
				</div>

				<div className="article-media-description">
					<p className="font-subheader">{description}</p>
					<a className="font-reference" href={reference} target="_blank" rel="noopener">{reference}</a>
				</div>
			</div>
		</Fade>
	)
};

const ArticleLinks = ({}) => {
	return (
		<div className="article-links">
			<Fade cascade triggerOnce delay={fadeDelay}>
				<FacebookShareButton url={window.location.pathname}>
					<FacebookIcon round size={50}/>
				</FacebookShareButton>

				<LinkedinShareButton url={window.location.pathname}>
					<LinkedinIcon round size={50}/>
				</LinkedinShareButton>

				<TwitterShareButton url={window.location.pathname}>
					<TwitterIcon round size={50}/>
				</TwitterShareButton>
			</Fade>
		</div>
	)
};

const ArticleTitle = ({ data }) => {
	return (
		<div className="article-title">
			<Fade triggerOnce cascade damping={0.3} direction="up">
				<h1 className="font-title">{data.title}</h1>
				<h2 className="font-header">Client: {data.client}</h2>
			</Fade>
		</div>
	)
};

const ArticleSection = ({ basePath, content, media }) => {
	return (
		<div className="article-section">
			<div className="article-markdown">
				<Fade triggerOnce cascade damping={0.3} direction="up">
					<ReactMarkdown source={content}/>
				</Fade>
			</div>
			{media && (
				<>
					{media.images?.map((image) => <ArticleImage basePath={basePath} media={image}/>)}
					{media.video?.map((video) => <ArticleVideo basePath={basePath} media={video}/>)}
				</>
			)}
		</div>
	)
};

function CaseArticle ({ project, basePath }) {
	return (
		<>
			<SmallLanding title={project.landing.title} text={project.landing.text} alt={project.landing.alt}
						  image={`${basePath}/${project.landing.image}`}
						  imageWebp={`${basePath}/${project.landing.image_webp}`}/>

			<Section>
				<div className="article-body">
					<ArticleLinks/>
					{console.log(project)}

					<div className="article-content">
						{project.section?.map(
							({ content, media }) => <ArticleSection basePath={basePath} content={content}
																	media={media}/>)}
					</div>

				</div>
			</Section>
			<Contact/>
		</>
	)
}

export default CaseArticle
