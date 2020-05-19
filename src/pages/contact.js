import React, {useContext, useEffect} from 'react'
import Landing from '../components/landing/Landing'
import {AnimationContext} from "../context/animations/AnimationContext";
import Layout from "../components/layout/Layout";
import Fonts from "../components/font/Fonts";
import image from '../../public/assets/images/landing/colorful-earth-hq.jpg'
import Display from "../components/display/Display";
import ContactPage from "../components/contact/Contact";
function Contact(props) {

    const animate = useContext(AnimationContext);

    useEffect(() => {
        //Load animation only if app has loaded once
         (animate.appLoaded) ? animate.animation.secondLoad() : null;
    }, []);

    return (
        <div className="content-wrapper">
            <Landing title={"Redefining Innovative"} text={"See what ASRR can do for your company today"} image={image} boxes projects/>
            <Layout>
                <Display/>
                <ContactPage/>
            </Layout>
        </div>
    )
}

export default Contact
