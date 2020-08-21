import React, {useContext, useEffect} from 'react'
import {AnimationContext} from '../context/animations/AnimationContext'
import ServicePage from '../components/services/Services'
import useI18n from '../hooks/use-i18n'
import Landing from '@/landing/PageLanding'
import imageDark from '../../public/assets/images/landing/contact/phone-dark.png'
import imageLight from '../../public/assets/images/landing/contact/phone-light.png'
import {useTheme} from "../context/theme/ThemeContext";
import {motion} from "framer-motion";

function Services(props) {
    const darkmode = useTheme().dark
    const animate = useContext(AnimationContext);
    // useEffect(() => {
    //     (animate.appLoaded) ? animate.animation.secondLoad() : null
    // }, []);

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

    return (
        <motion.div initial={"show"} exit="hidden" variants={fadeOut} className="content-wrapper">
            <Landing title="services.landing.title" text="services.landing.text"
                     image={darkmode ? imageDark : imageLight} imageClass="floating-mobile"/>
            <ServicePage/>
        </motion.div>

    )
}

export default Services
