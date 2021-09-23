import React from "react";

//Animations setup used for the cards on blog, portfolio
export const cardAnimations = (values: object) => {
    return {
        duration: 1500,
        cascade: true,
        triggerOnce: true,
        ...values
    }
}
