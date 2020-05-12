import React, {useContext, useEffect, useState} from 'react'
import Landing from '../components/landing/Landing'
import Overlay from "../components/landing/Overlay";
import {AnimationContext} from "../context/animations/AnimationContext";
import Layout from "../components/layout/Layout";
import Portfolio from "../components/portfolio/Portfolio";

function Index(props) {

    const animate = useContext(AnimationContext);

    useEffect(() => {
        //Load animation only if app has loaded once
         (animate.appLoaded) ? animate.animation.secondLoad() : null
    }, []);

    return (
        <div className="content-wrapper">
            <Landing/>
            <Layout>
                <Portfolio/>
            </Layout>

        </div>
    )
}

export default Index
