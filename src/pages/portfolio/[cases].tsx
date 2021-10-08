// noinspection DuplicatedCode

import React from 'react'
import PageLayout from '@/modules/shared/layout/PageLayout'
import {getAllCases} from '../../lib/api'
import matter from 'gray-matter'
import Article from "@/modules/shared/article/Article";

function Page({content}) {
    const basePath = `/content/portfolio/cases/nl/${content.title}`;

    const SEOProps = {
        ...content.meta_tags
    }

    return (
        <PageLayout className="darkmodeContainer" {...SEOProps}>
            <Article content={content} basePath={basePath}/>
        </PageLayout>
    )
}

export default Page

export async function getStaticProps({params}) {
    const slug = params.cases.toLowerCase();
    // @ts-ignore
    let data = await import(`public/content/portfolio/cases/nl/${slug}/${slug}.md`);
    // let data = await import(`${BasePaths.CASES}/nl/${slug}/${slug}.md`);
    let content = matter(data.default).data;
    const basePath = `/content/written/case/nl/${slug}`; //TODO check if works with enum

    //Get all project info and only show their cards and titles for the read more part
    const allCases = getAllCases([
        'title',
        'card',
    ]);

    return {
        props: {allCases, basePath, content},
    }
}

export async function getStaticPaths() {

    const allCases = await getAllCases([
        'title',
    ]);

    const paths = allCases.map(cse => ({
        params: {cases: cse.title.toLowerCase()},
    }));

    return {paths, fallback: false}

}
