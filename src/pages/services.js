import React, {useContext, useEffect} from 'react';
import Landing from "../components/landing/Landing";
import {AnimationContext} from "../context/animations/AnimationContext";
import Layout from "../components/layout/Layout";
import ServicePage from "../components/services/Services";
import image from '../../public/assets/images/landing/laptop.jpg'
import ContactPreview from "../components/contact/Preview";

function Services(props) {

    const animate = useContext(AnimationContext);

    useEffect(() => {
        //Load animation only if app has loaded once
        (animate.appLoaded) ? animate.animation.secondLoad() : null;
    }, []);


    return (
        <div className="content-wrapper">
            <Landing title={"Top Services"} text={"Services that will blow your mind"} image={image}/>
            <Layout>
                <ServicePage/>
                <ContactPreview/>
            </Layout>
        </div>
    );
}

export default Services;
