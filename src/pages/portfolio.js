import React, { useContext, useEffect } from 'react'
import Landing from '@/landing/PageLanding'
import { AnimationContext } from '../context/animations/AnimationContext'
import Layout from '../components/layout/Layout'
import PortfolioPage from '../components/portfolio/Portfolio'
import imageDark from '../../public/assets/images/landing/contact/landing-dark.png'
import imageLight from '../../public/assets/images/landing/contact/landing-light.png'
import ContactPreview from '../components/contact/Preview'
import useI18n from '../hooks/use-i18n'
import { useTheme } from '../context/theme/ThemeContext'

function Portfolio() {
    const i18n = useI18n();
    const animate = useContext(AnimationContext);
    const darkmode = useTheme().dark
    useEffect(() => {(animate.appLoaded) ? animate.animation.secondLoad() : null;}, []);
    return (
        <div className="content-wrapper">
            <Landing title="portfolio.landing.title" text="portfolio.landing.text" image={darkmode ? imageDark : imageLight}/>
            <Layout>
                <PortfolioPage/>
                <ContactPreview className="section-contact-preview"/>
            </Layout>
        </div>
    );
}
export default Portfolio;
