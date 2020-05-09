import React, {useContext, useEffect} from 'react';
import {motion, useAnimation} from "framer-motion";
import logo from "../../../public/assets/images/logo/asrr.svg"
import {AnimationContext} from "../../context/AnimationContext";

function Overlay() {
    const animate = useContext(AnimationContext);
    const animation = animate.home.overlay;

    const initialLogo = {
        y: "200%",
    };

    const initialBox = {
        scaleX: 0,
    };

    return (
        <motion.div variants={animation.background.variant} animate={animation.background.animate} initial={"hidden"}
                    className="transition-animation">
                <span className="element-overflow">
                    <motion.div animate={animation.box.animate} initial={initialBox}
                                className="element-overflow-background"> </motion.div>
                    <motion.img animate={animation.logo.animate} initial={initialLogo} src={logo} alt="asrr"/>
            	</span>
        </motion.div>
    );
}

export default Overlay;