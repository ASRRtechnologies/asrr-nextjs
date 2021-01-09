import React, {useEffect} from 'react'
import PortfolioPage from '@/portfolio/Portfolio'
import Contact from "@/contact/Preview";
import {useHeader} from "../context/navigation/HeaderContext";
import matter from 'gray-matter'

function Portfolio({basePath, data}) {

    const header = useHeader();

    useEffect(() => {
        header.setHeaderWhite(false)
    }, []);

    return (
        <>
            <PortfolioPage basePath={basePath} data={data}/>
            <Contact/>
        </>
    )
}

export async function getStaticProps () {
    let content = await import(`public/content/portfolio/nl/portfolio.md`)
    let parsedContent = matter(content.default)
    let data = parsedContent.data
    const basePath = `/content/portfolio/nl`
    return {
        props: { basePath, data },
    }
}

export default Portfolio
