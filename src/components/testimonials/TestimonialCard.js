import React from 'react'
import PictureFallback from '@/utillities/titles/PictureFallback'

function TestimonialCards ({ data, basePath }) {
	const {name, position, story, image_webp, company, alt, image} = data;
	return (
		<div className="card-round">
			<span className="card-round-image">
				<PictureFallback image={`${basePath}/${image_webp}`} fallbackImage={`${basePath}/${image}`} alt={alt}/>
			</span>
			<h1 className="theme-font font-card-title">{name}</h1>
			<h2 className="font-card-header">{position}</h2>
			<h3 className="font-general">{story}</h3>
			<p className="font-card-subheader">{company}</p>
		</div>
	)
}

export default TestimonialCards
