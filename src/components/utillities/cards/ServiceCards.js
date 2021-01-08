import React from 'react'
import PictureFallback from '@/utillities/titles/PictureFallback'

function ServiceCards ({ data, basePath }) {

	const { image, alt, image_webp, title, text } = data

	return (
		<div className="card-round">
			<span className="card-round-image">
				<PictureFallback image={`${basePath}/${image_webp}`} fallbackImage={`${basePath}/${image}`} alt={alt}/>
			</span>
			<h1 className="theme-font font-card-title">{title}</h1>
			<p className="font-general">{text}</p>
		</div>
	)
}

export default ServiceCards
