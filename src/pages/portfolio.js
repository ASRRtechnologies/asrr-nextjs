import React, {useEffect} from 'react'
import PortfolioPage from '@/portfolio/Portfolio'
import Contact from "@/contact/Preview";
import {useHeader} from "../context/navigation/HeaderContext";
import matter from 'gray-matter'
import { getAllProjects } from '../lib/api'
// import { getAllProjects } from '../lib/api'

function Portfolio({basePath, data, allProjects}) {

    const header = useHeader();

    useEffect(() => {
        header.setHeaderWhite(false)
    }, []);


    return (
        <>
            <PortfolioPage basePath={basePath} data={data} allProjects={allProjects} />
            <Contact/>
        </>
    )
}

export async function getStaticProps () {
    let content = await import(`public/content/portfolio/nl/portfolio.md`);
    let parsedContent = matter(content.default);
    let data = parsedContent.data;
    const basePath = `/content/portfolio/nl`;

    const allProjects = getAllProjects([
        'title',
        'slug',
        'card'
    ]);

    return {
        props: {allProjects, basePath, data },
    }
}

export default Portfolio
