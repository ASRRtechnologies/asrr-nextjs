import React from 'react'
import ContactPage from '../components/contact/Contact'
import matter from 'gray-matter'
import PageLayout from '@/modules/shared/layout/PageLayout'
import Banner from "@/modules/shared/landing/Banner";

const SEOProps = {
    title: "ASRR - Contact",
    content: "ASRR Levert innovatieve software oplossingen met een specialisme in de bouw"
}

function Contact({content}) {
    const basePath = `/content/contact/nl`;

    return (
        <PageLayout noPreview={true} className="darkmodeContainer" {...SEOProps}>
            <Banner {...content.landing} image={`${basePath}/${content.landing.image}`}/>
            <ContactPage data={content}/>
        </PageLayout>
    )
}

export async function getStaticProps() {
    //This is the portfolio page cms
    // @ts-ignore
    let data = await import(`public/content/contact/nl/contact.md`);
    // let data = await import(`${BasePaths.CONTACT}/nl/contact.md`);
    let content = matter(data.default).data;

    return {
        props: {content},
    }
}

export default Contact
