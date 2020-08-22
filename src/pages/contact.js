import React, { useContext, useEffect } from 'react'
import { AnimationContext } from '../context/animations/AnimationContext'
import Landing from '@/landing/PageLanding'
import ContactPage from '../components/contact/Contact'
import imageDark  from '../../public/assets/images/landing/contact/phone-dark.png'
import imageLight from '../../public/assets/images/landing/contact/phone-light.png'
import { useTheme } from '../context/theme/ThemeContext'
import {motion} from "framer-motion";

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

function Contact() {
    const darkmode = useTheme().dark

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <motion.div initial={"show"} exit="hidden" animate="show" variants={fadeOut} className="content-wrapper">
            <Landing title="contact.landing.title" text="contact.landing.text" image={darkmode ? imageDark : imageLight} imageClass="floating-mobile"/>
                <ContactPage/>
        </motion.div>
    )
}
export default Contact
