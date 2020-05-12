import React, {useContext, useEffect} from 'react';
import Landing from "../components/landing/Landing";
import {AnimationContext} from "../context/animations/AnimationContext";

function Portfolio(props) {

    const animate = useContext(AnimationContext);

    useEffect(() => {
        animate.animation.secondLoad();
    }, []);


    return (
        <div>
            <Landing/>
        </div>
    );
}

export default Portfolio;