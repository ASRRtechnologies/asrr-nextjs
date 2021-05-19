import React, {useEffect} from 'react'
import Clients from '../components/clients/Clients'
import Contact from '../components/contact/Preview'
import Why from '@/why-asrr/Why'
import PreviewBlog from '@/blog/Preview'
import PreviewServices from '@/services/Preview'
import PreviewPortfolio from '@/portfolio/Preview'
import {useHeader} from '../context/navigation/HeaderContext'
import TechStack from '@/techstack/TechStack'
import matter from 'gray-matter'
import Testimonials from '@/testimonials/Testimonials'
import {getAllArticles, getAllCases, getAllNews} from '../lib/api'
import Application from '@/layout/Application'
import ImageLanding from "@/landing/ImageLanding";
import image from "#/landing/landing-asrr-min.jpg";
import ClientGrid from "@/clients/ClientGrid";

function Index({homepage, servicepage, basePath, allCases, allArticles, allNews}) {

    const header = useHeader();

    const SEOProps = {
        title: "ASRR - Home",
        content: "ASRR Levert innovatieve software oplossingen met een specialisme in de bouw"
    }

    useEffect(() => {
        header.setHeaderWhite(true)
    }, []);

    const getCases = () => {
        return allCases.filter((project) => {
            return project.title.toLowerCase() === 'form' || project.title.toLowerCase() === 'nwo' ||
                project.title.toLowerCase() === 'hes'
        })
    };

    const getBlogs = () => {
        return allArticles.filter(
            (article) => article.title.toLowerCase() === 'itaas' || article.title.toLowerCase() === 'microservices' ||
                article.title.toLowerCase() === 'heijmans-configurator')

        // let news = allNews.filter((artnews) => {
        // 	console.log(artnews)
        // })

        // let selectedBlogs = [...articles, ...news]

    };

    return (
        <Application {...SEOProps}>
            <ImageLanding image={image} title={homepage.landing.title} text={homepage.landing.text}
                          button={homepage.landing.button}/>
            <ClientGrid data={homepage.clients}/>
            <PreviewServices data={homepage.services_section} cards={servicepage}/>
            <TechStack basePath={basePath} data={homepage.technologies_section}/>
            <PreviewPortfolio data={homepage.portfolio_section} selectedProjects={getCases()}/>
            <Testimonials data={homepage.testimonials_section} basePath={basePath}/>
            <Why data={homepage.quality_section}/>
            <PreviewBlog data={homepage.blog_section} selectedBlogs={getBlogs()}/>
            <Clients data={homepage.clients}/>
            <Contact/>
        </Application>
    )
}

export async function getStaticProps() {

    let content = await import(`public/content/home/nl/home.md`);
    let parsedContent = matter(content.default);
    let homepage = parsedContent.data;
    const basePath = `/content/home/nl`;

    let servicesContent = await import(`public/content/service_page/nl/services.md`);
    let servicesParsedContent = matter(servicesContent.default);
    let servicepage = servicesParsedContent.data;

    const allCases = getAllCases([
        'title',
        'slug',
        'card',
        'info',
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

    return {
        props: {basePath, homepage, servicepage, allCases, allArticles, allNews},
    }
}

export default Index
