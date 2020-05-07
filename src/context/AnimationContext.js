import React, {useState, createContext} from "react";

export const AnimationContext = createContext();
import {useAnimation} from "framer-motion";


const container = {
    hidden: {
        y: "-100%"
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
            animate: homeAnimation,
            method: async () => {
                await homeAnimation.start({
                    x: "100%",
                    backgroundColor: "#f00",
                    transition: {duration: 3},
                }).then(
                    () => {
                        landingAnimation.start({
                            x: "100%",
                            backgroundColor: "#f00",
                            transition: {duration: 3},
                        })
                    }
                )
            },
        }
    });

    return (
        <AnimationContext.Provider value={{...state}}>
            {children}
        </AnimationContext.Provider>
    );
};

export default provider;


