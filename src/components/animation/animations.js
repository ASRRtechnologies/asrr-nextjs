import React from 'react';
import {useAnimation} from "framer-motion";

//Here the animations are defined for the pages
const easing = [.17,.67,.82,.1];


// Homepage animations
export const header = {
    variant: {
        hidden: {
            y: "-100%",
            transition: {
                duration: 0.4,
                easing: easing
            }
        },
        show: {
            y: 0,
            transition: {
                duration: 0.4,
                easing: easing
            }
        }
    }
};

//Black ASRR overlay
export const overlay = {
    background: {
        hidden: {
            scaleX: 1,
            easing:easing
        },
        show: {
            transformOrigin:"right",
            scaleX: 0,
            transition: {
                duration: 1,
                easing:easing
            },
        }
    },
    box: {
        hidden: {
            scaleX: 0,
            easing:easing
        },
        show: {
            scaleX: 1,
            transition: {
                duration: 0.5,
                easing:easing
            },
        }
    },
};


