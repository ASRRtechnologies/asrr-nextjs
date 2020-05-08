import React, {useState, createContext} from "react";
export const AnimationContext = createContext();
import {useAnimation} from "framer-motion";
import {header, overlay} from "../components/animation/animations";

const provider = ({children}) => {

    const headerAnimation = useAnimation();
    const overlayAnimation = useAnimation();

    async function homePageAnimation() {
        overlayAnimation.start("show").then(() =>
        headerAnimation.start("show") )
    };

    const [state, setState] = useState({
        home: {
            header:{
                animate:headerAnimation,
                variant:header.variant
            },
            overlay:{
                animate:overlayAnimation,
                variant:overlay.variant
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



