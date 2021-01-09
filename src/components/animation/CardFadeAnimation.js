import React from 'react'
import { Fade } from 'react-awesome-reveal'


function CardFadeAnimation ({children}) {
	return (
		<Fade cascade fraction={0.4} damping={0.3} triggerOnce direction="up">
			{children}
		</Fade>
	)
}

export default CardFadeAnimation
