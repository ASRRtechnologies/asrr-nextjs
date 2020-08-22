import React, {useMemo, useContext} from "react";
import {IntersectionContext} from "./IntersectionObserver";
import {motion} from 'framer-motion';

export const FadeUp = ({children, delayOrder, delay, className, stagger, duration = 0.4, easing = [0.42, 0, 0.58, 1]}) => {
    const {inView} = useContext(IntersectionContext);

    // const transition = useMemo(
    //     () => ({
    //         duration,
    //         delay: delayOrder / 5,
    //         ease: easing
    //     }),
    //     [duration, delayOrder, easing]
    // );

    const regVariant = {
        hidden: {
            opacity: 0,
            transition: {
                delay
            }
        },
        show: {
            opacity: 1,
            transition: {
                delay
            }
        }
    };

    {console.log(inView)}


    return (
        <>
            <motion.div initial="hidden" className={className} animate={inView ? "show" : "hidden"} exit="hidden" variants={regVariant}>
                {children}
            </motion.div>
        </>
    );
};
