import React, {useContext, useEffect} from 'react'
import Landing from '@/landing/PageLanding'
import {AnimationContext} from '../context/animations/AnimationContext'
import imageDark from '../../public/assets/images/landing/contact/phone-dark.png'
import imageLight from '../../public/assets/images/landing/contact/phone-light.png'
import useI18n from '../hooks/use-i18n'
import {useTheme} from '../context/theme/ThemeContext'
import PortfolioPage from "@/portfolio/Portfolio"

function Portfolio() {
    const animate = useContext(AnimationContext);
    const darkmode = useTheme().dark
    useEffect(() => {
        (animate.appLoaded) ? animate.animation.secondLoad() : null;
    }, []);
    return (
        <div className="content-wrapper">
            <Landing title="portfolio.landing.title" text="portfolio.landing.text"
                     image={darkmode ? imageDark : imageLight} imageClass="floating-mobile"/>
                     <PortfolioPage/>
        </div>
    );
}

export default Portfolio;
