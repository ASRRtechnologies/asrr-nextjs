import React, {useEffect} from 'react'
import Clients from '../components/clients/Clients'
import Contact from '../components/contact/Preview'
import Why from '@/why-asrr/Why'
import PreviewServices from '@/services/ServicePreview'
import {useHeader} from '../context/navigation/HeaderContext'
import TechStack from '@/techstack/TechStack'
import matter from 'gray-matter'
import Testimonials from '@/testimonials/Testimonials'
import {getAllArticles, getAllCases, getAllNews, getAllServices, getAllTutorials} from '../lib/api'
import PageLayout from '@/layout/PageLayout'
import PortfolioPreview from "@/modules/portfolio/PortfolioPreview";
import Banner from "@/modules/shared/landing/Banner";
import BlogPreview from "@/modules/blog/BlogPreview";
// @ts-ignore
import image from "#/landing/landing-asrr-min.jpg";

const SEOProps = {
    title: "ASRR - Home",
    content: "ASRR Levert innovatieve software oplossingen met een specialisme in de bouw"
}

function Index({homepage, allServices, allCases, allBlogs,}) {
    const basePath = `/content/home/nl`;
    const header = useHeader();

    // const SEOProps = {
    //     ...homepage.meta_tags
    // }

    useEffect(() => {
        // @ts-ignore
        header.setHeaderWhite(true)
    }, []);

    return (
        <PageLayout className="darkmodeContainer" {...SEOProps}>
            <Banner landing={true} image={image} title={homepage.landing.title} text={homepage.landing.text}
                    button={homepage.landing.button}/>
            <PreviewServices content={homepage.services} allServices={allServices}/>
            <TechStack basePath={basePath} content={homepage.technologies}/>
            <PortfolioPreview content={homepage.portfolio} allCases={allCases}/>
            <Testimonials content={homepage.testimonials} basePath={basePath}/>
            <Why data={homepage.quality}/>
            <BlogPreview content={homepage.blog} allBlogs={allBlogs}/>
            <Clients content={homepage.clients}/>
            {/*<FlexGrid images={homepage.clients} col={5}/>*/}
            <Contact/>
        </PageLayout>
    )
}

export async function getStaticProps() {
    // @ts-ignore
    let content = await import(`public/content/home/nl/home.md`);
    // let content = await import(`${BasePaths.HOME}/nl/home.md`);
    let parsedContent = matter(content.default);
    let homepage = parsedContent.data;

    // @ts-ignore
    let servicesContent = await import(`public/content/services/nl/services.md`);
    // let servicesContent = await import(`${BasePa ths.SERVICE_PAGE}/nl/services.md`);
    let servicesParsedContent = matter(servicesContent.default);
    let servicepage = servicesParsedContent.data;

    const allServices = getAllServices([
        'title',
        'slug',
        'card',
        'info'
    ])

    const allCases = getAllCases([
        'title',
        'slug',
        'card',
        'info'
    ]);

    const allArticles = getAllArticles([
        'title',
        'slug',
        'card',
        'info',
        'type'
    ]);

    const allNews = getAllNews([
        'title',
        'slug',
        'card',
        'info',
        'type'
    ]);

    const allTutorials = getAllTutorials([
        'title',
        'slug',
        'card',
        'info',
        'type'
    ]);

    const allBlogs = [...allArticles, ...allNews, ...allTutorials]

    return {
        props: {homepage, allCases, allBlogs, allServices},
    }
}

export default Index
