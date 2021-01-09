import React from 'react'
import { Fade } from 'react-awesome-reveal'


function CardFadeAnimation ({children}) {
	return (
		<Fade cascade delay={100} duration={300} fraction={0.3} triggerOnce>
			{children}
		</Fade>
	)
}

export default CardFadeAnimation
