import React, {useContext, useEffect} from 'react'
import HomeLanding from '@/landing/HomeLanding'
import {AnimationContext} from "../context/animations/AnimationContext";
import Layout from "../components/layout/Layout";
import image from '../../public/assets/images/landing/contact.jpg'
import display from '../../public/assets/images/contact/display.jpg'
import Display from "../components/display/Display";
import ContactPage from "../components/contact/Contact";
import useI18n from "../hooks/use-i18n";

function Contact() {
    const i18n = useI18n();
    const animate = useContext(AnimationContext);
    useEffect(() => {(animate.appLoaded) ? animate.animation.secondLoad() : null;}, []);
    return (
        <div className="content-wrapper">
            <HomeLanding title={i18n.t("contact.landing.title")} text={i18n.t("contact.landing.text")} image={image}/>
            <Layout>
                {/*<Display image={display}/>*/}
                <ContactPage big={true}/>
            </Layout>
        </div>
    )
}
export default Contact
