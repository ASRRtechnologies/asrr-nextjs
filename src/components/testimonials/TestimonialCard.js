import React from 'react'
import PictureFallback from '@/utillities/titles/PictureFallback'

function TestimonialCards ({ data, basePath }) {
	const {name, position, story, image_webp, company, alt, image} = data;
	return (
		<div className="card-round">
			<span className="card-round-image">
				<PictureFallback image={`${basePath}/${image_webp}`} fallbackImage={`${basePath}/${image}`} alt={alt}/>
			</span>
			<h2 className="bold">{name}</h2>
			<h4>{position}</h4>
			<p>{story}</p>
			<h4 className="bold">{company}</h4>
		</div>
	)
}

export default TestimonialCards
