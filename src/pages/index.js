import React, {useContext, useEffect, useState} from 'react'
import Landing from '../components/landing/Landing'
import {AnimationContext} from "../context/animations/AnimationContext";
import Layout from "../components/layout/Layout";
import PortfolioPreview from "../components/portfolio/Preview";
import ServicePreview from "../components/services/Preview";
import image from '../../public/assets/images/landing/drone-2.jpg'
import display from '../../public/assets/images/landing/oldschool.jpg'
import Display from "../components/display/Display";
import Clients from "../components/clients/Clients";
import Contact from "../components/contact/Contact";

function Index(props) {

    const animate = useContext(AnimationContext);

    useEffect(() => {
        //Load animation only if app has loaded once
         (animate.appLoaded) ? animate.animation.secondLoad() : null;
        // Fonts()
    }, []);

    return (
        <div className="content-wrapper">
            <Landing title={"Redefining Innovative"} text={"See what ASRR can do for your company today"} image={image} boxes projects/>
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
