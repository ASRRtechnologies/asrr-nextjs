import React, {useContext, useEffect, useState} from 'react'
import Landing from '../components/landing/Landing'
import Animation from "../components/landing/Animation";
import {AnimationContext} from "../context/AnimationContext";

function Index(props) {

    const animate = useContext(AnimationContext);

    useEffect(() => {
        animate.home.method();
    }, []);

    return (
        <div className="content-wrapper">
            <Animation/>
            <Landing/>
        </div>
    )
}

export default Index
