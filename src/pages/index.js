import React, {useContext, useEffect, useState} from 'react'
import Landing from '../components/landing/Landing'
import {AnimationContext} from "../context/animations/AnimationContext";
import Layout from "../components/layout/Layout";
import PortfolioPreview from "../components/portfolio/Preview";
import ServicePreview from "../components/services/Preview";
import image from '../../public/assets/images/landing/drone-2.jpg'
import display from '../../public/assets/images/landing/oldschool.jpg'
import Display from "../components/display/Display";
import Head from 'next/head'
import Clients from "../components/clients/Clients";
import Contact from "../components/contact/Contact";
import {contentLanguageMap} from "../context/lib/i18n";
import useI18n from '../hooks/use-i18n';
import EN from '../locales/en.json'

function Index(props) {

    const i18n = useI18n();
    const animate = useContext(AnimationContext);

    useEffect(() => {
        //Load animation only if app has loaded once
         (animate.appLoaded) ? animate.animation.secondLoad() : null;
    }, []);

    return (
        <div className="content-wrapper">
            <Head>
                <meta
                    httpEquiv="content-language"
                    content={contentLanguageMap[i18n.activeLocale]}
                />
            </Head>
            <Landing title={i18n.t('home.landing.title')} text={i18n.t('home.landing.text')} image={image} boxes projects/>
            <Layout>
                <Display image={display}/>
                <PortfolioPreview/>
                <ServicePreview/>
                <Contact/>
                <Clients/>
            </Layout>
        </div>
    )
}

export default Index
