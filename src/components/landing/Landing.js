import React, {useEffect, useContext} from 'react'
import {motion, useAnimation} from 'framer-motion'
import image from '../../../public/assets/images/drone.jpg'
import Link from 'next/link'
import {AnimationContext} from "../../context/AnimationContext";

const easing = "anticipate";

//End point of animation
const reveal = {

    initial: {
        translateY: '100%',
    },

    animate: i => ({
        translateY: 0,
        transition: {
            delay: i,
            duration: 1.5,
            ease: easing,
        }
    })
};

const animation = {

    initial: {
        x:0,

    },
    animate: {
        x:"100%",
        transition: {
            delay:3,
            duration: 1,
        },
    }
};


function Landing(props) {

    const controls = useAnimation();
    const animate = useContext(AnimationContext);

    useEffect(() => {



    }, []);


    return (
        <motion.div exit={{opacity: 0}} className="landing-container">

            {/*<motion.div initial={false} animate={landing} className="transition-animation">*/}
            {/*    <img src={logo} alt="asrr"/>*/}
            {/*</motion.div>*/}

            {/*<div className="landing-text">*/}
			{/*	<span className="landing-overflow">*/}
			{/*		<motion.h1 animate={animate.home.landing} >Redefining innovative</motion.h1>*/}
            {/*        <motion.h1 initial={false} animate={controls}>Redefining innovative</motion.h1>*/}
			{/*	</span>*/}
            {/*    <span className="landing-overflow">*/}
			{/*		<motion.p*/}
            {/*            variants={reveal} animate={"animate"} custom={1.5}*/}
            {/*            initial={"initial"}>See what ASRR can do for your company today</motion.p>*/}
			{/*	</span>*/}

            {/*    <span className="landing-overflow">*/}
            {/*        <Link href="projects">*/}
            {/*            <motion.a*/}
            {/*                variants={reveal} animate={"animate"} custom={2}*/}
            {/*                initial={"initial"}>Read More</motion.a>*/}
            {/*        </Link>*/}
			{/*	</span>*/}
            {/*</div>*/}
            {/*<Link href="test"><a>Test</a></Link>*/}
            <img src={image} alt="drone"/>
        </motion.div>
    )
}

export default Landing
