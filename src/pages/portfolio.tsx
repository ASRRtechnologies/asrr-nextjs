import React, {useEffect} from 'react'
import PortfolioPage from '@/modules/portfolio/Portfolio';
import Contact from "@/contact/Preview";
import {useHeader} from "../context/navigation/HeaderContext";
import matter from 'gray-matter'
import { getAllCases } from '../lib/api'
import PageLayout from '@/layout/PageLayout'
import Banner from "@/modules/shared/landing/Banner";

const SEOProps = {
    title:"ASRR - Portfolio",
    content:"ASRR Levert innovatieve software oplossingen met een specialisme in de bouw"
}

function Portfolio({content, allProjects}) {
    const {title, text} = content.page_title;
    const header = useHeader();
    const customBasePath = (projectName: string) => `/content/written/case/nl/${projectName}`; //nl will be language variable

    useEffect(() => {
        // @ts-ignore
        header.setHeaderWhite(false)
    }, []);

    return (
        <PageLayout {...SEOProps}>
            <Banner title={title} content={text}/>
            <PortfolioPage content={content} allProjects={allProjects} customBasePath={customBasePath}/>
            <Contact title={undefined} className={undefined}/>
        </PageLayout>
    )
}

export async function getStaticProps () {
    // @ts-ignore
    let data = await import(`public/content/portfolio/nl/portfolio.md`);
    let content = matter(data.default).data;

     const allProjects = getAllCases([
        'title',
        'slug',
        'card',
         'info'
    ]);

    return {
        props: {allProjects, content },
    }
}

export default Portfolio
