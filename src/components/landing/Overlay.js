import React, {useContext, useEffect} from 'react';
import {motion, useAnimation} from "framer-motion";
import logo from "../../../public/assets/images/logo/asrr.svg"
import {AnimationContext} from "../../context/AnimationContext";

function Overlay() {
    const animate = useContext(AnimationContext);
    const animation = animate.animation.overlay;

    useEffect(() => {
        animate.animation.firstLoad();
    }, []);

    return (
        <motion.div animate={animation.background.animate} initial={animation.background.initial}
                    className="transition-animation">
                <span className="element-overflow">
                    <motion.div animate={animation.box.animate} initial={animation.box.initial}
                                className="element-overflow-background"> </motion.div>
                    <motion.img animate={animation.logo.animate} initial={animation.logo.initial} src={logo} alt="asrr"/>
            	</span>
        </motion.div>
    );
}

export default Overlay;