import React, {useContext, useEffect} from 'react';
import HomeLanding from "@/landing/HomeLanding";
import {AnimationContext} from "../context/animations/AnimationContext";
import Layout from "../components/layout/Layout";
import PortfolioPage from "../components/portfolio/Portfolio";
import image from '../../public/assets/images/landing/camera.jpg'
import ContactPreview from "../components/contact/Preview";
import useI18n from "../hooks/use-i18n";

function Portfolio() {
    const i18n = useI18n();
    const animate = useContext(AnimationContext);
    useEffect(() => {(animate.appLoaded) ? animate.animation.secondLoad() : null;}, []);
    return (
        <div className="content-wrapper">
            <HomeLanding title={i18n.t("case.landing.title")} text={i18n.t("case.landing.text")} image={image}/>
            <Layout>
                <PortfolioPage/>
                <ContactPreview className="section-contact-preview"/>
            </Layout>
        </div>
    );
}
export default Portfolio;
