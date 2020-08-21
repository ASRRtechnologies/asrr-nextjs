import React, {useEffect} from 'react'
import Landing from '@/landing/PageLanding'
import imageDark from '../../public/assets/images/landing/contact/phone-dark.png'
import imageLight from '../../public/assets/images/landing/contact/phone-light.png'
import {useTheme} from '../context/theme/ThemeContext'
import PortfolioPage from "@/portfolio/Portfolio"
import {motion} from "framer-motion";
import HomeLanding from "@/landing/HomeLanding";

const textEasing = [.42, 0, .58, 1];
const fadeOut = {
    show: {
        opacity:1,
        transition: {
            ease: textEasing,
            duration:1
        }
    },
    hidden: {
        translateY: "100px",
        opacity:0,
        transition: {
            duration: 1,
            ease: textEasing,
        }
    }
}

function Portfolio() {
    const darkmode = useTheme().dark

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <motion.div initial={"show"} exit="hidden" animate="show" variants={fadeOut} className="content-wrapper">
            <Landing title="portfolio.landing.title" text="portfolio.landing.text"
                     image={darkmode ? imageDark : imageLight} imageClass="floating-mobile"/>
            <PortfolioPage/>
        </motion.div>
    );
}

export default Portfolio;
