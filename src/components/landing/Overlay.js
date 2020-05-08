import React, {useContext, useEffect} from 'react';
import {motion, useAnimation} from "framer-motion";
import logo from "../../../public/assets/images/logo/asrr.svg"
import {AnimationContext} from "../../context/AnimationContext";

function Overlay() {
    const animate = useContext(AnimationContext);
    const animation = animate.home.overlay;
    const controls = useAnimation();

    const init = {
        y:20
    }

    async function sequence() {
        await controls.start({ x: 100 });
        await controls.start({ x: 10 });
        await controls.start({ x: 0 });
        await controls.start({ top: 0 })
    }

    useEffect(() => {
        sequence().then(r => null);
    });

    return (
        <motion.div variants={animation.background.variant} animate={animation.background.animate} initial={"hidden"}
                    className="transition-animation">
                <span className="element-overflow">
                    {/*<div className="element-overflow-background">*/}

                    {/*</div>*/}
                    <motion.img animate={controls} initial={init} src={logo} alt="asrr"/>
                    {/*<motion.img variants={animation.logo.variant} animate={animation.logo.animate}  initial={"hidden"} src={logo} alt="asrr"/>*/}
            	</span>
        </motion.div>
    );
}

export default Overlay;