// noinspection DuplicatedCode

import React, {useEffect} from 'react'
import PageLayout from '@/layout/PageLayout'
import {getAllTutorials} from '../../../lib/api'
import matter from 'gray-matter'
import {useHeader} from "../../../context/navigation/HeaderContext";
import Article from "@/modules/shared/article/Article";

function Page({content}) {
    const basePath = `/content/blog/posts/${content.type}/nl/${content.title}`;

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
    const slug = params.tutorial.toLowerCase();
    // let data = await import(`${BasePaths.TUTORIAL}/nl/${slug}/${slug}.md`);

    // @ts-ignore
    let data = await import(`public/content/blog/posts/tutorial/nl/${slug}/${slug}.md`);
    let content = matter(data.default).data;
    const basePath = `/content/written/tutorial/nl/${slug}`;

    //Get all project info and only show their cards and titles for the read more part
    const allTutorials = getAllTutorials([
        'title',
        'card',
    ]);

    return {
        props: {allTutorials, basePath, content, error: false},
    }
}

export async function getStaticPaths() {

    const allTutorials = await getAllTutorials([
        'title',
    ]);

    const paths = allTutorials.map(project => ({
        params: {tutorial: project.title.toLowerCase()},
    }));

    return {paths, fallback: false}

}
