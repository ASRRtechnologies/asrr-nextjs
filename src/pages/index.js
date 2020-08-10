import React, {useContext, useEffect} from 'react'
import HomeLanding from '@/landing/HomeLanding'
import {AnimationContext} from '../context/animations/AnimationContext'
import Layout from '../components/layout/Layout'
import PortfolioPreview from '../components/portfolio/Preview'
import ServicePreview from '../components/services/Preview'
import image from '../../public/assets/images/landing/drone-2.jpg'
import display from '../../public/assets/images/landing/oldschool.jpg'
import Display from '../components/display/Display'
import Clients from '../components/clients/Clients'
import Contact from '../components/contact/Preview'
import useI18n from '../hooks/use-i18n'
import Stories from "@/stories/Stories";
import Why from "@/why-asrr/Why";

function Index(props) {

    const i18n = useI18n();
    const animate = useContext(AnimationContext);

    useEffect(() => {
        //Load animation only if app has loaded once
        (animate.appLoaded) ? animate.animation.secondLoad() : null;
    }, []);

    return (
        <div className="content-wrapper">
            <HomeLanding title={'home.landing.title'} text={'home.landing.text'} image={image} boxes
                         projects/>
            <Layout>
                <ServicePreview/>
                <PortfolioPreview/>
                <Stories/>
                <Why/>
                <Contact/>
                <Clients/>
            </Layout>
        </div>
    )
}

export default Index
