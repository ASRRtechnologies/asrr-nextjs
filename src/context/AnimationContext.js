import React, { useState, createContext } from "react";
export const AnimationContext = createContext();


const container = {
    hidden: {
        y:"-100%"
    },

    show: {
        y:0,
        transition: {
            duration: 0.4,
            ease: "linear",
        }
    }
};


const provider = ({children}) => {
    const [state, setState] = useState({
        container:container
    });

    return (
        <AnimationContext.Provider
            value={{...state}}
        >
            {children}
        </AnimationContext.Provider>
    );
};

export default provider;


