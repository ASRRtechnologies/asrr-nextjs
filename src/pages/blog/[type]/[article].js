import React, {useState} from 'react'
import Section from '@/layout/Section'
import Application from "@/layout/Application";
import Layout from "@/layout/Layout";
import WideText from "@/article/WideText";
import ArticleImage from "@/article/ArticleImage";
import ImageSlider from "@/article/ImageSlider";
import KeyWords from "@/article/KeyWords";
import Video from "@/article/Video";
import BreadCrumb from "@/blog/BreadCrumb";
import {cases} from "../../../data/cases";
import {blog} from "../../../data/blog";
import Title from "@/titles/Title";
import Head from 'next/head';

import Facebook from "@/icons/Facebook";
import i18n from "../../../context/lib/i18n";
import useI18n from "../../../hooks/use-i18n";
import {NextSeo} from "next-seo";


function Page({breadCrumb, found, query}) {
    console.log(breadCrumb)
    let indexes = {}

    let updateIndex = (componentName) => {
        if (indexes[componentName] == null) indexes[componentName] = 0;
        let newIndex = indexes[componentName] + 1;
        indexes[componentName] = newIndex;
        return newIndex;
    }

    let i18n = useI18n();

    let title = i18n.t(`blog.${found.type}.${found.name}.meta.title`);
    let description = i18n.t(`blog.${found.type}.${found.name}.meta.description`);

    return (
        <>
            <NextSeo
                title={title}
                titleTemplate = 'ASRR | %s'
                description={description}
                openGraph={{
                    title: {title},
                    description: {description},
                    // url: 'https://www.example.com/articles/article-title',
                    type: 'article',
                    article: {
                        // publishedTime: '2017-06-21T23:04:13Z',
                        // modifiedTime: '2018-01-21T18:04:43Z',
                        // expirationTime: '2022-12-21T22:04:11Z',
                        // section: 'Section II',
                        // authors: [
                        //     'https://www.example.com/authors/@firstnameA-lastnameA',
                        //     'https://www.example.com/authors/@firstnameB-lastnameB',
                        // ],
                        tags: found.tags,
                    },
                    images: [
                        {
                            url: 'https://www.asrr.nl/assets/images/asrr-banner.jpg',
                            width: 850,
                            height: 650,
                            alt: 'ASRR Banner',
                        },
                    ],
                }}
            />
            <Application>
                <Layout>
                    <Section className="section-article">
                        <BreadCrumb crumbs={breadCrumb}/>

                        {/*<Title title={`blog.${found.type}.${found.name}.content.title`}/>*/}

                        <KeyWords keyWords={found.tags}/>

                        {found.content && found.content.map((component) => {
                            let i = updateIndex(component.type);

                            console.log(i)

                            if (component.type === "paragraph") {
                                return <WideText
                                    title={component.title && `blog.${found.type}.${found.name}.content.${component.type}.${i}.title`}
                                    text={`blog.${found.type}.${found.name}.content.${component.type}.${i}.text`}/>
                            }

                            if (component.type === "image") {
                                return <ArticleImage
                                    image={`/assets/blog/${found.type}/${found.name}/${found.name}-${i}.${component.format}`}
                                    subtitle={`blog.${found.type}.${found.name}.content.${component.type}.${i}.subtitle`}
                                    square={component.square}/>
                            }

                            if (component.type === "iframe") {
                                return <iframe src={component.src} height="907" width="504" frameBorder="0"
                                               allowFullScreen="" title="Ingevoegde bijdrage"/>
                            }

                            if (component.type === "code") {
                                return <div className="Container" dangerouslySetInnerHTML={{__html: component.code}}/>;
                            }

                        })}

                        {/*<WideText/>*/}
                        {/*<ArticleImage/>*/}
                        {/*<WideText/>*/}
                        {/*<ArticleImage square/>*/}
                        {/*<ImageSlider square/>*/}

                        {/*<Video/>*/}
                        <div className="sharethis-inline-share-buttons"/>
                    </Section>
                </Layout>
            </Application>
        </>
    )
}

Page.getInitialProps = ({query}) => {
    let breadCrumb = ["blog", query.type, query.article];

    let found = blog.find(b => (b.type === query.type) && (b.name === query.article))
    console.log(found)
    return {breadCrumb, found}
};

export default Page

