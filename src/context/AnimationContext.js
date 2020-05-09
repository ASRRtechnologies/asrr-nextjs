import React, {useState, createContext} from "react";

export const AnimationContext = createContext();
import {useAnimation} from "framer-motion";
import {header, overlay} from "../components/animation/animations";

//Bezier easing curve
const easing = [.17, .67, .82, .1];

const provider = ({children}) => {
    //Create animation hooks for start stop methods
    const headerAnimation = useAnimation();
    const overlayAnimation = {
        background: useAnimation(),
        logo: useAnimation(),
        box: useAnimation(),
    };

    //Sequence function for chained animations in asrr-logo in overlay
    //Show animation slide-up
    async function showLogo() {
        await overlayAnimation.logo.start({
            y: "0%", transition: {
                duration: 1,
                easing: easing
            }
        });
        await overlayAnimation.logo.start({y: "0%"});
    }

    async function hideLogo() {
        await overlayAnimation.logo.start({
            opacity: 0, transition: {
                duration: 0.2,
                easing: easing
            }
        });
    }

    async function showBox() {
        await overlayAnimation.box.start({
            transformOrigin:"left",
            scaleX: 1,
            transition: {
                duration: 0.5,
                easing:easing
            },
        });
    }

    async function hideBox() {
        await overlayAnimation.box.start({
            transformOrigin:"right",
            scaleX: 0,
            transition: {
                duration: 0.5,
                easing:easing
            },
        });
    }


    //Main function that triggers all animations
    async function homePageAnimation() {
        showLogo().then(() => showBox()
            .then(() => hideLogo().then(() => hideBox()
                .then(() => overlayAnimation.background.start("show")
                    .then(() => headerAnimation.start("show")
                    ))
            ))
        )
    }

    const [state, setState] = useState({
        home: {
            header: {
                animate: headerAnimation,
                variant: header.variant
            },
            overlay: {
                background: {
                    animate: overlayAnimation.background,
                    variant: overlay.background
                },
                logo: {
                    animate: overlayAnimation.logo,
                    variant: overlay.logo
                },
                box: {
                    animate: overlayAnimation.box,
                    variant: overlay.box
                }
            },
            method: homePageAnimation,
        }
    });

    return (
        <AnimationContext.Provider value={{...state}}>
            {children}
        </AnimationContext.Provider>
    );
};

export default provider;



