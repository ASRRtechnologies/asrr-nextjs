import React, {useContext, useEffect} from 'react'
import Landing from '@/landing/PageLanding'
import {AnimationContext} from '../context/animations/AnimationContext'
import Layout from '../components/layout/Layout'
import imageDark from '../../public/assets/images/landing/contact/phone-dark.png'
import imageLight from '../../public/assets/images/landing/contact/phone-light.png'
import ContactPreview from '../components/contact/Preview'
import useI18n from '../hooks/use-i18n'
import {useTheme} from '../context/theme/ThemeContext'
import Title from "@/text/Title";
import {previewCases} from "../data/portfolio";
import Card from "@/portfolio/Card";
import Section from "@/layout/Section";

function Portfolio() {
    const i18n = useI18n();
    const animate = useContext(AnimationContext);
    const darkmode = useTheme().dark
    useEffect(() => {
        (animate.appLoaded) ? animate.animation.secondLoad() : null;
    }, []);
    return (
        <div className="content-wrapper">
            <Section>
                <Landing title="portfolio.landing.title" text="portfolio.landing.text"
                         image={darkmode ? imageDark : imageLight} imageClass="floating-mobile"/>
                <Layout>
                    <Title title={'portfolio.preview.title.header'} text={'portfolio.preview.title.text'}/>
                    <div className="portfolio portfolio-preview">
                        {previewCases.map(({image, discipline, title, client, id}) => <Card route={id} client={client}
                                                                                            img={image}
                                                                                            discipline={discipline}
                                                                                            title={title}/>)}
                    </div>
                    <ContactPreview className="section-contact-preview"/>

                </Layout>
            </Section>
        </div>
    );
}

export default Portfolio;
