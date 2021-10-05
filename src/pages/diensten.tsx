import React, {useEffect} from 'react'
import ServicePage from '@/modules/pages/services/Services'
import {useHeader} from '../context/navigation/HeaderContext'
import matter from 'gray-matter'
import PageLayout from '@/layout/PageLayout'
import {getAllServices} from 'src/lib/api'
import Banner from "../components/modules/shared/landing/Banner";

function Diensten({content, allServices}) {
    const basePath = `/content/services/nl`;

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
            <Banner {...content.landing} image={`${basePath}/${content.landing.image}`}/>
            <ServicePage content={content} allServices={allServices}/>
        </PageLayout>
    )
}

export async function getStaticProps() {
    //This is the portfolio page cms
    // @ts-ignore
    let data = await import(`public/content/services/nl/services.md`);
    // let data = await import(`${BasePaths.SERVICE_PAGE}/nl/services.md`);
    let content = matter(data.default).data;

    const allServices = getAllServices([
        'title',
        'slug',
        'card',
        'info'
    ])

    return {
        props: {content, allServices},
    }
}

export default Diensten
