import React, {useEffect} from 'react'
import {motion, useAnimation} from 'framer-motion'
import image from '../../../public/assets/images/drone.jpg'
import Link from 'next/link'

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
    const landing = useAnimation();

    useEffect(() => {
        // landing.start({
        //     x:"100%",
        //     transition: {
        //         delay:3,
        //         duration: 1,
        //     },
        // }).then(() => {
        //     controls.start({
        //         x: "100%",
        //         backgroundColor: "#f00",
        //         transition: {duration: 3},
        //     }).then(r => alert(23))
        // });

    }, []);


    return (
        <motion.div exit={{opacity: 0}} className="landing-container">

            {/*<motion.div initial={false} animate={landing} className="transition-animation">*/}
            {/*    <img src={logo} alt="asrr"/>*/}
            {/*</motion.div>*/}

            <div className="landing-text">
				<span className="landing-overflow">
					{/*<motion.h1 variants={reveal} animate={"animate"} custom={1}*/}
                    {/*           initial={"initial"}>Redefining innovative</motion.h1>*/}
                    <motion.h1 initial={false} animate={controls}>Redefining innovative</motion.h1>
				</span>
                <span className="landing-overflow">
					<motion.p
                        variants={reveal} animate={"animate"} custom={1.5}
                        initial={"initial"}>See what ASRR can do for your company today</motion.p>
				</span>

                <span className="landing-overflow">
                    <Link href="projects">
                        <motion.a
                            variants={reveal} animate={"animate"} custom={2}
                            initial={"initial"}>Read More</motion.a>
                    </Link>
				</span>
            </div>
            <Link href="test"><a>Test</a></Link>
            <img src={image} alt="drone"/>
        </motion.div>
    )
}

export default Landing
