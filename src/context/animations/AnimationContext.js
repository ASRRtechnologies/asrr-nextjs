import React, {useState, createContext} from "react";
export const AnimationContext = createContext();
import {useAnimation} from "framer-motion";

const provider = ({children}) => {

    //Create animation hooks for start stop methods
    const useAnimationHook = {
        background: useAnimation(),
        logo: useAnimation(),
        box: useAnimation(),
        header: useAnimation(),
        landingText: useAnimation(),
        landingCards: useAnimation()
    };

    //Bezier easing curve of animations
    const easing = [.17, .67, .82, .1];
    const textEasing = [.42, 0, .58, 1];

    //Initial state of overlay animation
    const initialOverlay = {
        scaleX: 1,
    };

    //Sequence function for chained animations
    async function hideOverlay() {
        await useAnimationHook.background.start({
            scaleX: 0,
            transition: {
                duration: 1,
                easing: easing
            },
        });
    }

    const initialLogo = {
        y: "200%",
    };

    async function showLogo() {
        await useAnimationHook.logo.start({
            y: "0%", transition: {
                duration: 0.5,
                easing: easing
            }
        });
    }

    async function hideLogo() {
        await useAnimationHook.logo.start({
            opacity: 0, transition: {
                duration: 0.2,
                easing: easing
            }
        });
    }

    const initialBox = {
        scaleX: 0,
    };

    async function showBox() {
        await useAnimationHook.box.start({
            scaleX: 1,
            transition: {
                duration: 0.5,
                easing: easing
            },
        });
    }

    async function hideBox() {
        await useAnimationHook.box.start({
            scaleX: 0,
            transition: {
                duration: 0.5,
                easing: easing
            },
            transformOrigin: "right",
        });
    }

    const initialHeader = {
        translateY: "-100%",
    };

    const exitHeader = {
        translateY: "-400%",
        transition: {
            duration: 0.4,
            easing: easing
        }
    };

    async function showHeader() {
        await useAnimationHook.header.start({
            translateY: "0%",
            transition: {
                duration: 0.4,
                easing: easing
            }
        });
    }

    const initialText = {
        translateY: '100%',
    };

    //Add delay prop i which is set with custom prop in the component
    const exitText = (i) => ({
        translateY: "100%",
        transition: {
            delay: i * 0.2,
            duration: 0.3,
            ease: textEasing,
        }
    });

//Add delay prop i which is set with custom prop in the component
    async function showText() {
        await useAnimationHook.landingText.start(i => ({
            translateY: "0%",
            transition: {
                delay: 0.5 * i,
                duration: 0.6,
                ease: textEasing,
            }
        }));
    }

    const initialLandingCards = {
        scaleY: 0,
    };

    const exitLandingCards = {
        scaleY: 0,
        transition: {
            delay:0.4,
            duration: 0.2
        }
    };

    async function showLandingCards() {
        await useAnimationHook.landingCards.start({
            scaleY: 1,
            transition: {
                duration: 0.2,
                ease: textEasing,
            }
        });
    }

    //Main function that triggers all animations
    //The setFirstload hook sets the firstTime that the app is loaded, to make sure only the firstLoad animation is load.
    //The firstLoad value is conditionally checked inside each page component to see if it is allowed to load the secondLoad Animation
    async function firstLoad() {
        showLogo()
            .then(() => showBox()
                .then(() => hideLogo()
                    .then(() => hideBox()
                        .then(() => hideOverlay()
                            .then(() => showHeader()
                                .then(() => showText())
                                .then(() => showLandingCards())
                                .then(() => setState(prevState => ({
                                    ...prevState,
                                    appLoaded: true,
                                })))
                            ))
                    ))
            )
    }

    //Main function that triggers all animations
    async function secondLoad() {
        showHeader()
            .then(() => showText())
                .then(() => showLandingCards())
    }

    const [state, setState] = useState({
        appLoaded:false,
        animation: {
            header: {
                animate: useAnimationHook.header,
                initial: initialHeader,
                exit:exitHeader
            },
            overlay: {
                background: {
                    animate: useAnimationHook.background,
                    initial: initialOverlay
                },
                logo: {
                    animate: useAnimationHook.logo,
                    initial: initialLogo
                },
                box: {
                    animate: useAnimationHook.box,
                    initial: initialBox
                }
            },

            landing: {
                landingText: {
                    animate: useAnimationHook.landingText,
                    initial: initialText,
                    exit:exitText
                },
                landingCards: {
                    animate: useAnimationHook.landingCards,
                    initial: initialLandingCards,
                    exit: exitLandingCards
                }
            },
            firstLoad: firstLoad,
            secondLoad:secondLoad
        }
    });

    const [firstAppLoad, setFirstLoad] = useState(true);
    return (
        <AnimationContext.Provider value={{...state}}>
            {children}
        </AnimationContext.Provider>
    );
};

export default provider;



