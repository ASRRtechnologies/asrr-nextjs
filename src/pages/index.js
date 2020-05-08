import React, {useContext, useEffect, useState} from 'react'
import Landing from '../components/landing/Landing'
import Overlay from "../components/landing/Overlay";
import {AnimationContext} from "../context/AnimationContext";

function Index(props) {

    const animate = useContext(AnimationContext);

    useEffect(() => {
        animate.home.method();
    }, []);

    return (
        <div className="content-wrapper">
            <Overlay/>
            <Landing/>
        </div>
    )
}

export default Index
