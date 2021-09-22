import React, {useEffect} from 'react'
import PageLayout from '@/layout/PageLayout'
import {getAllArticles, getAllNews} from '../../../lib/api'
import matter from 'gray-matter'
import useI18n from '../../../hooks/use-i18n'
// @ts-ignore
import NL from '../../../locales/nl'
import BlogArticle from '@/written/BlogArticle'
import {useHeader} from "../../../context/navigation/HeaderContext";
import {BasePaths} from "../../../data/paths";

function Page({allProjects, content, basePath, error}) {

    const SEOProps = {
        title: `ASRR - Artikel - ${content.title}`,
        content: `${content.landing.title}`
    }

    //Need to set locale in the static page
    const i18n = useI18n();
    const header = useHeader();
    useEffect(() => {
        i18n.locale('nl', NL);
        // @ts-ignore
        header.setHeaderWhite(true)
    }, []);

    return (
        <PageLayout {...SEOProps}>
            <BlogArticle project={content} basePath={basePath}/>
        </PageLayout>
    )
}

export async function getStaticProps({params}) {
    const slug = params.nieuws.toLowerCase();
    // @ts-ignore
    let data = await import(`public/content/blog/posts/news/nl/${slug}/${slug}.md`);

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

export default Page
