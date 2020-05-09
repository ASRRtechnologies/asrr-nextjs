import React, {useContext, useEffect, useState} from 'react'
import Landing from '../components/landing/Landing'
import Overlay from "../components/landing/Overlay";
import {AnimationContext} from "../context/AnimationContext";

function Index(props) {

    const animate = useContext(AnimationContext);

    useEffect(() => {
        //Load animation only if app has loaded once
         (animate.appLoaded) ? animate.animation.secondLoad() : null
    }, []);

    return (
        <div className="content-wrapper">
            <Landing/>
            <h1>
                Test
                Test
                Test
                Test
                Test
                Test
                Test
                Test
                Test
                Test
                Test
                Test
                Test
                Test
                Test
                Test
                Test
                Test
                Test
                Test
                Test
                Test
                Test
                Test
                Test
                Test
            </h1>
        </div>
    )
}

export default Index
