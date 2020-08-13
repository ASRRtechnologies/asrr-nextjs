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
import styled from "@emotion/styled";

const Wrapper = styled('div')`
        background: ${props => props.theme.layout.background};
        `;

function Index(props) {

    const i18n = useI18n();
    const animate = useContext(AnimationContext);

    useEffect(() => {
        //Load animation only if app has loaded once
        (animate.appLoaded) ? animate.animation.secondLoad() : null;
    }, []);

    return (
        <Wrapper className="content-wrapper">
            <HomeLanding title={'home.landing.title'} text={'home.landing.text'} image={image} projects/>
            <ServicePreview/>
            <PortfolioPreview/>
            <Stories/>
            <Why/>
            <Contact/>
            <Clients/>
        </Wrapper>
    )
}

export default Index
