import React, {useEffect} from 'react'
import Landing from '@/landing/ImageLanding'
import ContactPage from '../components/contact/Contact'
import {useTheme} from '../context/theme/ThemeContext'
import {motion} from "framer-motion";
import image from "#/landing/portfolio/brandi-redd-aJTiW00qqtI-unsplash.jpg";

const textEasing = [.42, 0, .58, 1];
const fadeOut = {
    show: {
        opacity: 1,
        transition: {
            ease: textEasing,
            duration: 1
        }
    },
    hidden: {
        translateY: "100px",
        opacity: 0,
        transition: {
            duration: 1,
            ease: textEasing,
        }
    }
};

function Contact() {
    const darkmode = useTheme().dark;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <motion.div initial={"show"} exit="hidden" animate="show" variants={fadeOut} className="content-wrapper">
            {/*<Landing title="contact.landing.title" text="contact.landing.text" image={darkmode ? imageDark : imageLight} imageClass="floating-mobile"/>*/}
            <Landing title="contact.landing.title" text="contact.landing.text"
                     className={`${darkmode ? "landing-overlay-dark" : "landing-overlay-light"}`}
                     image={image} scrollToID="#portfolio-page"/>
            <ContactPage/>
        </motion.div>
    )
}

export default Contact
