import React, {useEffect} from 'react'
import PortfolioPage from '@/portfolio/Portfolio'
import Contact from "@/contact/Preview";
import {useHeader} from "../context/navigation/HeaderContext";
import matter from 'gray-matter'
import { getAllCases } from '../lib/api'

function Portfolio({basePath, data, allCases}) {

    const header = useHeader();

    useEffect(() => {
        header.setHeaderWhite(false)
    }, []);

    return (
        <>
            <PortfolioPage data={data} allProjects={allCases}/>
            <Contact/>
        </>
    )
}

export async function getStaticProps () {
    //This is the portfolio page cms
    let content = await import(`public/content/portfolio/nl/portfolio.md`);
    let parsedContent = matter(content.default);
    let data = parsedContent.data;

     const allCases = getAllCases([
        'title',
        'slug',
        'card',
         'info'
    ]);

    return {
        props: {allCases, data },
    }
}

export default Portfolio
