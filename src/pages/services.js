import React, {useContext, useEffect} from 'react'
import {AnimationContext} from '../context/animations/AnimationContext'
import ServicePage from '../components/services/Services'
import useI18n from '../hooks/use-i18n'
import Landing from '@/landing/ImageLanding'
import imageDark from '../../public/assets/images/landing/contact/phone-dark.png'
import imageLight from '../../public/assets/images/landing/contact/phone-light.png'
import {useTheme} from "../context/theme/ThemeContext";
import {motion} from "framer-motion";
import image from "#/landing/portfolio/brandi-redd-aJTiW00qqtI-unsplash.jpg";

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
};

function Services(props) {
    const darkmode = useTheme().dark;

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

    return (
        <motion.div initial={"show"} exit="hidden" animate="show" variants={fadeOut} className="content-wrapper">
			<Landing title="services.landing.title" text="portfolio.landing.text" className={`${darkmode? "landing-overlay-dark" : "landing-overlay-light"}`}
					 image={image} scrollToID="#services-page"/>
            <ServicePage/>
        </motion.div>

    )
}

export default Services
