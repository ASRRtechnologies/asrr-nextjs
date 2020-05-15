import React, {useContext, useEffect} from 'react';
import Landing from "../components/landing/Landing";
import {AnimationContext} from "../context/animations/AnimationContext";
import Layout from "../components/layout/Layout";
import ServicePage from "../components/services/Services";
function Services(props) {

    const animate = useContext(AnimationContext);

    useEffect(() => {
        animate.animation.secondLoad();
    }, []);


    return (
        <div className="content-wrapper">
            <Landing/>
            <Layout>
                <ServicePage/>
            </Layout>
        </div>
    );
}

export default Services;