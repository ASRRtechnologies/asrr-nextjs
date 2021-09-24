import React, {useEffect} from 'react'
import BlogPage from '@/modules/blog/Blog';
import Contact from "@/contact/Preview";
import {useHeader} from "../context/navigation/HeaderContext";
import matter from 'gray-matter'
import {getAllArticles, getAllNews, getAllTutorials} from '../lib/api'
import PageLayout from '@/layout/PageLayout'
import Banner from "@/modules/shared/landing/Banner";

const SEOProps = {
    title: "ASRR - Blog",
    content: "ASRR Levert innovatieve software oplossingen met een specialisme in de bouw"
}

//Todo add allNews to AllArticles array
function Blog({content, allBlogs}) {
    const {landing} = content
    const header = useHeader();

    const customBasePath = (projectName: string) => `/content/written/artikel/nl/${projectName}`;

    useEffect(() => {
        // @ts-ignore
        header.setHeaderWhite(false)
    }, []);

    return (
        <PageLayout {...SEOProps}>
            <Banner {...landing}/>
            <BlogPage data={content} allBlogs={allBlogs} customBasePath={customBasePath}/>
            <Contact/>
        </PageLayout>
    )
}

export async function getStaticProps() {
    // @ts-ignore
    let data = await import(`public/content/blog/nl/blog.md`);
    // let data = await import(`${BasePaths.BLOG}/nl/blog.md`);
    let content = matter(data.default).data;

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
        props: {
            allBlogs,
            content
        }
    }
}

export default Blog
