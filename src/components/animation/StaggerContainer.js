import React, {useContext, useMemo} from 'react';
import {motion} from "framer-motion";
import {IntersectionContext} from "@/animation/IntersectionObserver";

function StaggerContainer({children, className, delayOrder, stagger, duration = 0.4, easing = [0.42, 0, 0.58, 1]}) {
    const {inView} = useContext(IntersectionContext);


    const variant = {
        hidden: {
            opacity: 0,
         },

        show: {
            opacity: 1,
            transition: {
                staggerChildren: 2
            }

        }
    };

    return (
        <motion.div initial="hidden" className={className} animate={"show"} exit="hidden" variants={variant}>
            {children}
        </motion.div>
    );
}

export default StaggerContainer;