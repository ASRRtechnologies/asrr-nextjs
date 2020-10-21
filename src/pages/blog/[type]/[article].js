import React from 'react'
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


function Page({breadCrumb, found, query}) {
    console.log(breadCrumb)

    return (
        <>
            <Application>
                <Layout>
                    <Section className="section-article">
                        <BreadCrumb crumbs={breadCrumb}/>
                        <KeyWords keyWords={found.tags}/>

                        <WideText/>
                        <ArticleImage/>
                        <WideText/>
                        <ArticleImage square/>
                        <ImageSlider square/>

                        <Video/>

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

