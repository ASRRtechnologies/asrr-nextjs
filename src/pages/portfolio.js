import React, {useEffect} from 'react'
import PortfolioPage from '@/portfolio/Portfolio'
import Contact from "@/contact/Preview";
import {useHeader} from "../context/navigation/HeaderContext";
import matter from 'gray-matter'
import { getAllCases } from '../lib/api'

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
    //This is the portfolio page cms
    let content = await import(`public/content/portfolio/nl/portfolio.md`);
    let parsedContent = matter(content.default);
    let data = parsedContent.data;

    const basePath = `/content/written/case/nl`;
    const allCases = getAllCases([
        'title',
        'slug',
        'card'
    ]);

    return {
        props: {allCases, basePath, data },
    }
}

export default Portfolio
