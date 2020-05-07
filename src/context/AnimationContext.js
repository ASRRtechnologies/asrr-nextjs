import React, {useState, createContext} from "react";
export const AnimationContext = createContext();
import {useAnimation} from "framer-motion";
import {homepage} from "../components/animation/home";

const container = {
    hidden: {
        y: "-100%",
        transition:{
            duration:1,
            ease:"linear"
        }
    },

    show: {
        y: 0,
        transition: {
            duration: 0.4,
            ease: "linear",
        }
    }
};


const provider = ({children}) => {
    const homeAnimation = useAnimation();
    const landingAnimation = useAnimation();


    const [state, setState] = useState({

        home: {
            landing: landingAnimation,
            animate: homepage().animate,
            variant: homepage().variant,
            method: homepage().method(),
        }
    });

    return (
        <AnimationContext.Provider value={{...state}}>
            {children}
        </AnimationContext.Provider>
    );
};

export default provider;


