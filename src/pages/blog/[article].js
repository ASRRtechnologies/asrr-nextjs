import React from 'react'
import Section from '@/layout/Section'
import Application from "@/layout/Application";
import Layout from "@/layout/Layout";
import WideText from "@/article/WideText";
import ArticleImage from "@/article/ArticleImage";
import ImageSlider from "@/article/ImageSlider";


function Page({data, query}) {


    return (
        <>
            <Application>
                <Layout>
                    <Section>
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

