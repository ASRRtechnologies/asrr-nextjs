import React, {useState, createContext} from "react";

export const AnimationContext = createContext();
import {useAnimation} from "framer-motion";
import {header, overlay} from "../components/animation/animations";

const provider = ({children}) => {

    const headerAnimation = useAnimation();

    const overlayAnimation = {
        background: useAnimation(),
        logo: useAnimation(),
    };

    async function homePageAnimation() {
        overlayAnimation.logo.start("show").then(() =>
            overlayAnimation.background.start("show").then(() => headerAnimation.start("show")
            )
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



