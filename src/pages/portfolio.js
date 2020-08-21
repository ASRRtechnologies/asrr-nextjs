import React, {useEffect} from 'react'
import Landing from '@/landing/PageLanding'
import imageDark from '../../public/assets/images/landing/contact/phone-dark.png'
import imageLight from '../../public/assets/images/landing/contact/phone-light.png'
import {useTheme} from '../context/theme/ThemeContext'
import PortfolioPage from "@/portfolio/Portfolio"
import {motion} from "framer-motion";
import HomeLanding from "@/landing/HomeLanding";

function Portfolio() {
    const darkmode = useTheme().dark

    const textEasing = [.42, 0, .58, 1];
    const fadeOut = {
        show: {
            opacity:1,
            transition: {
                delay: 0.5,
                ease: textEasing,
            }
        },
        hidden: {
            translateY: "100px",
            opacity:0,
            transition: {
                delay: 0.2,
                duration: 0.3,
                ease: textEasing,
            }
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <motion.div initial={"show"} exit="hidden" variants={fadeOut} className="content-wrapper">
            {/*<Landing title="portfolio.landing.title" text="portfolio.landing.text"*/}
            {/*         image={darkmode ? imageDark : imageLight} imageClass="floating-mobile"/>*/}
            <HomeLanding title={'home.landing.title'} text={'home.landing.text'}/>
            <PortfolioPage/>
        </motion.div>
    );
}

export default Portfolio;
