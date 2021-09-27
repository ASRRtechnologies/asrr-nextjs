import React, {useEffect} from 'react'
import PageLayout from '@/layout/PageLayout'
import {getAllTutorials} from '../../../lib/api'
import matter from 'gray-matter'
import useI18n from '../../../hooks/use-i18n'
// @ts-ignore
import NL from '../../../locales/nl'
import {useHeader} from "../../../context/navigation/HeaderContext";

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
        </PageLayout>
    )
}

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

export default Page
