import React, {useContext, useEffect, useState} from 'react'
import Landing from '../components/landing/Landing'
import {AnimationContext} from "../context/animations/AnimationContext";
import Layout from "../components/layout/Layout";
import PortfolioPreview from "../components/portfolio/Preview";
import ServicePreview from "../components/services/Preview";
import Fonts from "../components/font/Fonts";
import image from '../../public/assets/images/landing/colorful-earth-hq.jpg'
import Display from "../components/display/Display";

function Index(props) {

    const animate = useContext(AnimationContext);

    useEffect(() => {
        //Load animation only if app has loaded once
         (animate.appLoaded) ? animate.animation.secondLoad() : null;
        Fonts()
    }, []);

    return (
        <div className="content-wrapper">
            <Landing title={"Redefining Innovative"} text={"See what ASRR can do for your company today"} image={image} boxes projects/>
            <Layout>
                <Display/>
                <PortfolioPreview/>
                <ServicePreview/>
            </Layout>
        </div>
    )
}

export default Index
