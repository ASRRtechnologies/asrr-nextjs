import React, {useEffect} from 'react'
import PageLayout from "@/layout/PageLayout";
import {useHeader} from "../context/navigation/HeaderContext";
import ImageLanding from "@/landing/ImageLanding";
import image from "#/landing/landing-asrr-min.jpg";
import matter from "gray-matter";

function Page({data, query}) {

    const SEOProps = {
        title:"ASRR - Home",
        content:"ASRR Levert innovatieve software oplossingen met een specialisme in de bouw"
    }

    const header = useHeader();

    useEffect(() => {
        header.setHeaderWhite(true)
    }, []);

    return (
        <PageLayout {...SEOProps}>
            <ImageLanding image={data.landing.image} title={data.landing.title} text={data.landing.text}
                          button={data.landing.button}/>
        </PageLayout>

    )
}

export async function getStaticProps () {
    //This is the portfolio page cms
    let aboutContent = await import(`public/content/about/nl/about.md`);
    let aboutParsed = matter(aboutContent.default);
    let data = aboutParsed.data;

    return {
        props: { data },
    }
}

export default Page

