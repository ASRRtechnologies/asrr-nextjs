import React from 'react'
import Clients from '@/modules/pages/home/clients/Clients'
import Values from '@/modules/pages/home/values/Values';
import PreviewServices from '@/modules/pages/services/ServicePreview'
import TechStack from '@/modules/pages/home/techstack/TechStack'
import matter from 'gray-matter'
import Testimonials from '@/modules/pages/home/testimonials/Testimonials'
import {getAllArticles, getAllCases, getAllNews, getAllServices, getAllTutorials} from '../lib/api'
import PageLayout from '@/modules/shared/layout/PageLayout'
import PortfolioPreview from '@/modules/pages/portfolio/PortfolioPreview';
import Banner from "@/modules/shared/landing/Banner";
import BlogPreview from "@/modules/pages/blog/BlogPreview";
import image from '/public/assets/images/landing/landing-asrr-min.jpg';

function Index({homepage, allServices, allCases, allBlogs,}) {
    const basePath = `/content/home/nl`;

    const SEOProps = {
        ...homepage.meta_tags
    }

    return (
        <PageLayout className="darkmodeContainer" {...SEOProps}>
            <Banner landing={true} image={image} title={homepage.landing.title} text={homepage.landing.text}
                    button={homepage.landing.button}/>
            <Clients content={homepage.clients}/>
            <PreviewServices content={homepage.services} allServices={allServices}/>
            <PortfolioPreview content={homepage.portfolio} allCases={allCases}/>
            <Testimonials content={homepage.testimonials} basePath={basePath}/>
            <Values content={homepage.quality}/>
            <BlogPreview content={homepage.blog} allBlogs={allBlogs}/>
            <TechStack basePath={basePath} content={homepage.technologies}/>
            {/*<FlexGrid images={homepage.clients} col={5}/>*/}
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
