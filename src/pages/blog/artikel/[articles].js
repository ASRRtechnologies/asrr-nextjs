import React, {useEffect} from 'react'
import PageLayout from '@/layout/PageLayout'
import {getAllArticles} from '../../../lib/api'
import matter from 'gray-matter'
import useI18n from '../../../hooks/use-i18n'
import NL from '../../../locales/nl'
import BlogArticle from '@/written/BlogArticle'
import {useHeader} from "../../../context/navigation/HeaderContext";

function Page({allProjects, data, basePath}) {

    const SEOProps = {
        title: `ASRR - Artikel - ${data.title}`,
        content: `${data.landing.title}`
    }

    //Need to set locale in the static page
    const i18n = useI18n();
    const header = useHeader();
    useEffect(() => {
        i18n.locale('nl', NL);
        header.setHeaderWhite(true)
    }, []);

    const getRandomProject = () => {
        let numOfProjectsToShow = 2;
        let projectsToShow = [];

        //Remove current page project
        let uniqueProjects = allProjects.filter((project) => {
            return project.title !== data.title && project.discipline !== data.discipline
        });

        //Get random number between 0 and num of projects
        function randomIntFromInterval(min, max) { // min and max included
            return Math.floor(Math.random() * (max - min + 1) + min)
        }

        //In case of one project
        if (uniqueProjects.length === 1) {
            return uniqueProjects[0]
        } else {
            //loop twice
            for (let i = 0; i < numOfProjectsToShow; i++) {
                //push random project in projects to show array
                projectsToShow.push(uniqueProjects[randomIntFromInterval(0, uniqueProjects.length - 1)]);
                //remove the pushed project form the uniqueProjects so that isnt possible by chance to add twice the same projects
                uniqueProjects = uniqueProjects.filter(val => !projectsToShow.includes(val))
            }
            return projectsToShow
        }
    };

    return (
        <PageLayout {...SEOProps}>
            <BlogArticle project={data} basePath={basePath}/>
        </PageLayout>
    )
}

export async function getStaticProps({params}) {
    const {articles} = params;
    let content = await import(`public/content/written/artikel/nl/${articles}/${articles}.md`);
    let parsedContent = matter(content.default);
    let data = parsedContent.data;
    const basePath = `/content/written/artikel/nl/${articles.toLowerCase()}`;

    //Get all project info and only show their cards and titles for the read more part
    const allArticles = getAllArticles([
        'title',
        'card',
    ]);

    return {
        props: {allArticles, basePath, data},
    }
}

export async function getStaticPaths() {

    const allArticles = await getAllArticles([
        'title',
    ]);

    const paths = allArticles.map(project => ({
        params: {articles: project.title.toLowerCase()},
    }));

    return {paths, fallback: false}

}

export default Page
