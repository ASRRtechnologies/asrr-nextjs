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

function Portfolio({content, allCases}) {
    const header = useHeader();
    const customBasePath = (projectName: string) => `/content/written/case/nl/${projectName}`; //nl will be language variable

    useEffect(() => {
        // @ts-ignore
        header.setHeaderWhite(false)
    }, []);

    return (
        <PageLayout {...SEOProps}>
            <Banner {...content.landing}/>
            <PortfolioPage content={content} allCases={allCases} customBasePath={customBasePath}/>
            <Contact/>
        </PageLayout>
    )
}

export async function getStaticProps () {
    // @ts-ignore
    let data = await import(`public/content/portfolio/nl/portfolio.md`);
    // let data = await import(`${BasePaths.PORTFOLIO}/nl/portfolio.md`);
    let content = matter(data.default).data;

     const allCases = getAllCases([
        'title',
        'slug',
        'card',
         'info'
    ]);

    return {
        props: {allCases, content },
    }
}

export default Portfolio
