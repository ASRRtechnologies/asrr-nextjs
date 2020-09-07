import React, {useContext, useEffect} from 'react'
import HomeLanding from '@/landing/HomeLanding'
import {AnimationContext} from '../context/animations/AnimationContext'
import PortfolioPreview from '../components/portfolio/Preview'
import ServicePreview from '../components/services/Preview'
import image from '../../public/assets/images/landing/drone-2.jpg'
import Clients from '../components/clients/Clients'
import Contact from '../components/contact/Preview'
import Stories from "@/stories/Stories";
import Why from "@/why-asrr/Why";
import {motion} from 'framer-motion'

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

function Index(props) {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <motion.div initial={"show"} exit="hidden" animate="show" variants={fadeOut} className="content-wrapper">
            <HomeLanding title={'home.landing.title'} text={'home.landing.text'} image={image}/>
            <ServicePreview/>
            <PortfolioPreview/>
            <Stories/>
            <Why/>
            <Contact/>
            <Clients/>
        </motion.div>
    )
}

export default Index
