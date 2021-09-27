import React, {useEffect} from 'react'
import PageLayout from '@/layout/PageLayout'
import {getAllArticles} from '../../../lib/api'
import matter from 'gray-matter'
import useI18n from '../../../hooks/use-i18n'
// @ts-ignore
import NL from '../../../locales/nl'
import {useHeader} from "../../../context/navigation/HeaderContext";
import Article from "@/modules/article/Article";

function Page({allProjects, content, basePath}) {
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
        <PageLayout className="darkmodeContainer" {...SEOProps}>
            <Article project={content} basePath={basePath}/>
        </PageLayout>
    )
}

export default Page

export async function getStaticProps({params}) {
    const slug = params.article.toLowerCase();
    // let data = await import(`${BasePaths.ARTICLE}/nl/${slug}/${slug}.md`);
    // @ts-ignore
    let data = await import(`public/content/blog/posts/artikel//nl/${slug}/${slug}.md`);
    let content = matter(data.default).data;
    const basePath = `/content/written/artikel/nl/${slug}`;

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

    const allArticles = await getAllArticles([
        'title',
    ]);

    const paths = allArticles.map(project => ({
        params: {article: project.title.toLowerCase()},
    }));

    return {paths, fallback: false}

}
