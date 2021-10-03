// noinspection DuplicatedCode

import React, {useEffect} from 'react'
import PageLayout from '@/layout/PageLayout'
import {getAllServices} from '../../lib/api'
import matter from 'gray-matter'
import {useHeader} from "../../context/navigation/HeaderContext";
import Article from "@/modules/shared/article/Article";

function Page({content}) {
    const basePath = `/content/services/posts/nl/${content.title}`;

    const SEOProps = {
        ...content.meta_tags
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
    const slug = params.dienst.toLowerCase();
    let data = await import(`public/content/services/posts/nl/${slug}/${slug}.md`);
    // let data = await import(`${BasePaths.SERVICES}/nl/${slug}/${slug}.md`);
    let content = matter(data.default).data;
    const basePath = `/content/services/nl/${slug.toLowerCase()}`;

    return {
        props: {basePath, content},
    }
}

export async function getStaticPaths() {

    const allServices = await getAllServices([
        'title',
    ]);

    const paths = allServices.map(project => ({
        params: {dienst: project.title.toLowerCase()},
    }));

    return {paths, fallback: false}

}
