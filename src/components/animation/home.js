import React from 'react';
import {useAnimation} from "framer-motion";

//Here the animations are defined for the pages


// Homepage animations
export const homepage = () => {
    const homepageAnimation = useAnimation();
    return {
        animate: homepageAnimation,
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
        },
        method:() => {
             homepageAnimation.start("show").then(
                () => {
                    // landingAnimation.start({
                    //     x: "100%",
                    //     backgroundColor: "#f00",
                    //     transition: {duration: 3},
                    // })
                }
            )
        }
    }
};

