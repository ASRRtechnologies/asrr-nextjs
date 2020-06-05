import React, {useContext, useEffect} from 'react'
import Landing from '../components/landing/Landing'
import {AnimationContext} from "../context/animations/AnimationContext";
import Layout from "../components/layout/Layout";
import image from '../../public/assets/images/landing/contact.jpg'
import display from '../../public/assets/images/contact/display.jpg'
import Display from "../components/display/Display";
import ContactPage from "../components/contact/Contact";
import Head from './index'
function Contact(props) {

    const animate = useContext(AnimationContext);

    useEffect(() => {
        //Load animation only if app has loaded once
         (animate.appLoaded) ? animate.animation.secondLoad() : null;
    }, []);

    return (
        <div className="content-wrapper">
            <Head>
                <meta charSet='utf-8'/>
                <meta http-equiv='X-UA-Compatible' content='IE=edge'/>
                <meta name='viewport'
                      content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no'/>
                <meta name='description' content='Description'/>
                <meta name='keywords' content='Keywords'/>
                <title>Next.js PWA Example</title>

                <link rel="manifest" href="/manifest.json"/>
                <link href='/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16'/>
                <link href='/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32'/>
                <link rel="apple-touch-icon" href="/apple-icon.png"></link>
                <meta name="theme-color" content="#317EFB"/>
            </Head>
            <Landing title={"Contact"} text={"Get in touch and see what ASRR can do for your company today"} image={image}/>
            <Layout>
                <Display image={display}/>
                <ContactPage big={true}/>
            </Layout>
        </div>
    )
}

export default Contact
