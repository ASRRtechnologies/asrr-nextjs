import React from 'react'
import { Fade } from 'react-awesome-reveal'


function CardFadeAnimation ({children}) {
	return (
		<Fade cascade fraction={0.1} damping={0.1} triggerOnce direction="up">
			{children}
		</Fade>
	)
}

export default CardFadeAnimation
