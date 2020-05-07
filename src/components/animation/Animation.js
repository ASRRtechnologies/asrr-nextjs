import React from 'react';
import {motion} from "framer-motion";
import logo from "../../../public/assets/images/logo/asrr.svg"

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
function Animation(props) {

    return (
        <motion.div variants={animation} animate="animate" initial="initial" className="transition-animation">
            <img src={logo} alt="asrr"/>
        </motion.div>
    );
}

export default Animation;