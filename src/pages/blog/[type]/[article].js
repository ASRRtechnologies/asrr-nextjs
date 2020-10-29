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
import Animation from "@/animation/Animation";


function Page({breadCrumb, found, query}) {
    console.log(breadCrumb)
    let indexes = {}

    let updateIndex = (componentName) => {
        if (indexes[componentName] == null) indexes[componentName] = 0;
        let newIndex = indexes[componentName] + 1;
        indexes[componentName] = newIndex;
        return newIndex;
    }

    return (
        <>
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
                                return <WideText title={component.title && `blog.${found.type}.${found.name}.content.${component.type}.${i}.title`} text={`blog.${found.type}.${found.name}.content.${component.type}.${i}.text`}/>
                            }

                            if (component.type === "image") {
                                return <ArticleImage image={`/assets/blog/${found.type}/${found.name}/${found.name}-${i}.${component.format}`} subtitle={`blog.${found.type}.${found.name}.content.${component.type}.${i}.subtitle`} square={component.square}/>
                            }

                            if (component.type === "iframe") {
                                return <iframe src={component.src} height="907" width="504" frameborder="0" allowfullscreen="" title="Ingevoegde bijdrage"/>
                            }

                            if (component.type === "code"){
                                return  <div className="Container" dangerouslySetInnerHTML={{__html: component.code}}/>;
                            }

                        })}

                        {/*<WideText/>*/}
                        {/*<ArticleImage/>*/}
                        {/*<WideText/>*/}
                        {/*<ArticleImage square/>*/}
                        {/*<ImageSlider square/>*/}

                        {/*<Video/>*/}

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

