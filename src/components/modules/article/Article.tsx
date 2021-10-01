import React from 'react'
import Contact from '@/contact/Preview'
import Markdown from 'markdown-to-jsx';
import Section from '@/modules/shared/section/Section'
import {Fade} from 'react-awesome-reveal'
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
import ArticleImage from "@/modules/article/ArticleImage";

const HeaderOne = ({children}) => {
    return <h1 className="h2">{children}</h1>
}

const HeaderTwo = ({children}) => {
    return <h2 className="h3 no-margin">{children}</h2>
}

const HeaderThree = ({children}) => {
    return <h3 className="h4 no-margin">{children}</h3>
}

const HeaderFour = ({children}) => {
    return <h4 className="h5 no-margin">{children}</h4>
}

const HyperLink = (props) => {
    return <a {...props} className="link hover-link">{props.children}</a>
}

const ArticleSection = ({basePath, content, media}) => {
    return (
        <>
            <Fade className={articleStyles.text} triggerOnce cascade damping={0.3}>
                <Markdown
                    options={{
                        overrides: {
                            h1: HeaderOne,
                            h2: HeaderTwo,
                            h3: HeaderThree,
                            h4: HeaderFour,
                            a: HyperLink
                        },
                        wrapper: React.Fragment
                    }}
                >
                    {content}
                </Markdown>
            </Fade>
            {media && (
                <>
                    {media.images?.map((imageProps) => {
                        return(
                            <ArticleImage basePath={basePath}
                                media={{mediaType:"image", src: imageProps.image, ...imageProps}}
                            />
                        )
                    })}
                    {media.video?.map((video) => {
                        return(
                            <ArticleImage basePath={basePath}
                                          media={{mediaType:"video", ...video}}
                            />
                        )
                    })}
                </>
            )}
        </>
    )
};

const Socials = () => {
    return (
        <div className={articleStyles.socials}>
            <Fade cascade triggerOnce>
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

function Article({content, basePath}) {
    return (
        <>
            <Banner title={content.landing.title} text={content.landing.text} alt={content.landing.alt}
                    image={`${basePath}/${content.landing.image}`}/>

            <Section className="darkmodeContainer">
                <div className={articleStyles.body}>
                    <Socials/>

                    <div className={articleStyles.content}>
                        {content.section.map(
                            ({content, media}) => <ArticleSection key={uuid()} basePath={basePath} content={content}
                                                                  media={media}/>)}
                    </div>
                </div>
            </Section>
            <Contact/>
        </>
    )
}

export default Article
