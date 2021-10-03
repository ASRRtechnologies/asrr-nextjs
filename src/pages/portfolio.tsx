import React, {useEffect} from 'react'
import PortfolioPage from '@/modules/pages/portfolio/Portfolio';
import Contact from "@/contact/Preview";
import {useHeader} from "../context/navigation/HeaderContext";
import matter from 'gray-matter'
import { getAllCases } from '../lib/api'
import PageLayout from '@/layout/PageLayout'
import Banner from "@/modules/shared/landing/Banner";

function Portfolio({content, allCases}) {
    const SEOProps = {
        ...content.meta_tags
    }
    const header = useHeader();

    useEffect(() => {
        // @ts-ignore
        header.setHeaderWhite(false)
    }, []);

    return (
        <PageLayout className="darkmodeContainer" {...SEOProps}>
            <Banner {...content.landing}/>
            <PortfolioPage content={content} allCases={allCases}/>
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
