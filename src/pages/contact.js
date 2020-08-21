import React, { useContext, useEffect } from 'react'
import { AnimationContext } from '../context/animations/AnimationContext'
import Landing from '@/landing/PageLanding'
import ContactPage from '../components/contact/Contact'
import imageDark  from '../../public/assets/images/landing/contact/phone-dark.png'
import imageLight from '../../public/assets/images/landing/contact/phone-light.png'
import { useTheme } from '../context/theme/ThemeContext'
import {motion} from "framer-motion";

function Contact() {
    const animate = useContext(AnimationContext);
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
            translateY: "125%",
            opacity:0,
            transition: {
                delay: 0.2,
                duration: 0.3,
                ease: textEasing,
            }
        }
    }


    // useEffect(() => {(animate.appLoaded) ? animate.animation.secondLoad() : null;}, []);
    return (
        <motion.div initial={"show"} exit="hidden" variants={fadeOut} className="content-wrapper">
            <Landing title="contact.landing.title" text="contact.landing.text" image={darkmode ? imageDark : imageLight} imageClass="floating-mobile"/>
                <ContactPage/>
        </motion.div>
    )
}
export default Contact
