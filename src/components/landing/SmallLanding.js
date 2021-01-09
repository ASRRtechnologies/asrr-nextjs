import React from 'react'
import { Fade } from 'react-awesome-reveal'

function SmallLanding ({ title, text, image, imageWebp, alt }) {

	return (
		<div className="landing-small">

			<div className="landing-title-small">
				<Fade triggerOnce cascade damping={0.3} direction="up">
					<h1 className="font-landing-title">{title}</h1>
					<p className="font-landing-text">{text}</p>
				</Fade>

			</div>

			<picture>
				<source srcSet={imageWebp} type="image/webp"/>
				<source srcSet={image} type="image/jpeg"/>
				<img src={image} alt={alt}/>
			</picture>

		</div>
	)
}

export default SmallLanding
