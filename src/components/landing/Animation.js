import React, {useContext, useEffect} from 'react';
import {motion} from "framer-motion";
import logo from "../../../public/assets/images/logo/asrr.svg"
import {AnimationContext} from "../../context/AnimationContext";

const variant = {
    hidden: {
        opacity:0,
        scaleY: [null, 1, 2],
        transition:{
            easing:[.51,.92,.24,1.15],
            duration:0.2
        }
    },

    show: {
        opacity:1,
        scaleY: [null, 2, 0],
        transition: {
            duration: 1,
            easing:[.51,.92,.24,1.15]
        },
    }
};



function Animation(props) {

    const controls = useAnimation();
    async function logo() {
        await controls.start({
            translateY:"-100%",
            transition:{
                duration:0.2
            }

        });
        await controls.start({
            translateY:"0",
            transition:{
                duration:0.2
            }
        })
    }

    const animate = useContext(AnimationContext);
    return (
        <motion.div variants={animate.home.overlay.variant} animate={animate.home.overlay.animate} initial={"hidden"}
                    className="transition-animation">
                <span className="landing-overflow">
                    <motion.img variants={variant} animate={controls}  initial={"hidden"} src={logo} alt="asrr"/>
            	</span>
        </motion.div>
    );
}

export default Animation;