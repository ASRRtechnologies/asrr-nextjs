import React from 'react';
import {useAnimation} from "framer-motion";

//Here the animations are defined for the pages


// Homepage animations
export const header = {
    variant: {
        hidden: {
            y: "-100%",
            transition: {
                duration: 0.4,
                ease: "linear"
            }
        },
        show: {
            y: 0,
            transition: {
                duration: 0.4,
                ease: "linear",
            }
        }
    }
};

//Black ASRR overlay
export const overlay = {
    variant: {
        hidden: {
            scaleY: 1,
            easing:[.51,.92,.24,1.15]
        },
        show: {
            scaleY: 0,
            transition: {
                delay: 3,
                duration: 1,
                easing:[.51,.92,.24,1.15]
            },
        }
    }
};