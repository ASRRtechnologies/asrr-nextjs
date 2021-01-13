import React, {useEffect} from 'react'
import PortfolioPage from '@/portfolio/Portfolio'
import Contact from "@/contact/Preview";
import {useHeader} from "../context/navigation/HeaderContext";
import matter from 'gray-matter'
import { getAllCases } from '../lib/api'
import Application from '@/layout/Application'

function Portfolio({basePath, data, allCases}) {

    const SEOProps = {
        title:"ASRR - Portfolio",
        content:"ASRR Levert innovatieve software oplossingen met een specialisme in de bouw"
    }

    const header = useHeader();

    useEffect(() => {
        header.setHeaderWhite(false)
    }, []);

    return (
        <Application {...SEOProps}>
            <PortfolioPage data={data} allProjects={allCases}/>
            <Contact/>
        </Application>
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
