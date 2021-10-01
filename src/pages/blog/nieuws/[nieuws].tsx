// noinspection DuplicatedCode

import React, {useEffect} from 'react'
import PageLayout from '@/layout/PageLayout'
import {getAllArticles, getAllNews} from '../../../lib/api'
import matter from 'gray-matter'
import {useHeader} from "../../../context/navigation/HeaderContext";
import Article from "@/modules/article/Article";

function Page({content}) {
    const basePath = `/content/blog/posts/${content.type}/nl/${content.title}`;

    const SEOProps = {
        title: `ASRR - Artikel - ${content.title}`,
        content: `${content.landing.title}`
    }

    const header = useHeader();
    useEffect(() => {
        // @ts-ignore
        header.setHeaderWhite(true)
    }, []);

    return (
        <PageLayout className="darkmodeContainer" {...SEOProps}>
            <Article content={content} basePath={basePath}/>
        </PageLayout>
    )
}

export default Page

export async function getStaticProps({params}) {
    const slug = params.nieuws.toLowerCase();
    // @ts-ignore
    let data = await import(`public/content/blog/posts/nieuws/nl/${slug}/${slug}.md`);

    // let data = await import(`${BasePaths.NEWS}/nl/${slug}/${slug}.md`);
    let content = matter(data.default).data;
    const basePath = `/content/blog/artikel/nl/${slug}`;

    //Get all project info and only show their cards and titles for the read more part
    const allArticles = getAllArticles([
        'title',
        'card',
    ]);

    return {
        props: {allArticles, basePath, content},
    }
}

export async function getStaticPaths() {

    const allNews = await getAllNews([
        'title',
    ]);

    const paths = allNews.map(news => ({
        params: {nieuws: news.title.toLowerCase()},
    }));

    return {paths, fallback: false}

}

