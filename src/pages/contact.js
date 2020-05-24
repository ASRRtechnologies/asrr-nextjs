import React, {useContext, useEffect} from 'react'
import Landing from '../components/landing/Landing'
import {AnimationContext} from "../context/animations/AnimationContext";
import Layout from "../components/layout/Layout";
import image from '../../public/assets/images/landing/contact.jpg'
import display from '../../public/assets/images/contact/display.jpg'
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
            <Landing title={"Contact"} text={"Get in touch and see what ASRR can do for your company today"} image={image}/>
            <Layout>
                <Display image={display}/>
                <ContactPage big={true}/>
            </Layout>
        </div>
    )
}

export default Contact
