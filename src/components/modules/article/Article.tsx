import React from 'react'
import Contact from '@/contact/Preview'
import Interweave, {Markup} from "interweave";
import Section from '@/modules/shared/section/Section'
import { Fade } from 'react-awesome-reveal'
import {
    FacebookIcon,
    FacebookShareButton,
    LinkedinIcon,
    LinkedinShareButton,
    TwitterIcon,
    TwitterShareButton,
} from 'react-share'
import uuid from "react-uuid";
import Banner from "@/modules/shared/landing/Banner";
import articleStyles from "./article.module.scss";
import ReactMarkdown from 'react-markdown';

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

function transform(node: HTMLElement, children: Node[]): React.ReactNode {
    if (node.tagName === 'h1') {
        return <h1 className="h2">{children}</h1>;
    }

    if (node.tagName === 'h2') {
        return <h1 className="h3">{children}</h1>;
    }

    if (node.tagName === 'h3') {
        return <h1 className="h4">{children}</h1>;
    }

    if (node.tagName === 'h4') {
        return <h1 className="h5">{children}</h1>;
    }
}

const ArticleSection = ({ basePath, content, media }) => {
    // @ts-ignore
    console.log(content)
    return (
        <div className={articleStyles.text}>
                <Fade triggerOnce cascade damping={0.3} direction="up">
                    <ReactMarkdown renderers={{
                        paragraph: props => <a>{props.children}</a>,
                    }} source={content} />
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

const Socials = () => {
    return (
        <div className={articleStyles.socials}>
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

function Article ({ project, basePath }) {
    return (
        <>
            <Banner title={project.landing.title} text={project.landing.text} alt={project.landing.alt}
                    image={`${basePath}/${project.landing.image}`}/>

            <Section className="darkmodeContainer">
                <div className={articleStyles.body}>
                    <Socials/>

                    <div className={articleStyles.content}>
                        {project.section.map(
                            ({ content, media }) => <ArticleSection key={uuid()} basePath={basePath} content={content} media={media}/>)}
                    </div>
                </div>
            </Section>
            <Contact/>
        </>
    )
}

export default Article
