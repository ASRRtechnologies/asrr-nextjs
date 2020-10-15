import React from 'react'
import Section from '@/layout/Section'
import Application from "@/layout/Application";
import Layout from "@/layout/Layout";
import WideText from "@/article/WideText";
import ArticleImage from "@/article/ArticleImage";
import ImageSlider from "@/article/ImageSlider";
import KeyWords from "@/article/KeyWords";


function Page({data, query}) {


    return (
        <>
            <Application>
                <Layout>
                    <Section className="section-article">
                        <KeyWords/>
                        <WideText/>
                        <ArticleImage/>
                        <WideText/>
                        <ArticleImage square/>
                        <ImageSlider square/>
                    </Section>
                </Layout>
            </Application>
        </>
    )
}

Page.getInitialProps = ({query}) => {
    return {}
};

export default Page

