import React from 'react'
import PictureFallback from '@/utillities/titles/PictureFallback'

function ServiceCards ({ data, basePath, bullets }) {

	const { image, alt, image_webp, title, preview_text, bullet_points } = data;

	return (
		<div className="card-round">
			<span className="card-round-image">
				<PictureFallback image={`${basePath}/${image_webp}`} fallbackImage={`${basePath}/${image}`} alt={alt}/>
			</span>
			<h1 className="theme-font font-card-title">{title}</h1>
			{bullets ? (
				<ul>
					{bullet_points.map(({bullet}) => <li><p className="font-general">✔{bullet}</p></li>)}
				</ul>
			) : <p className="font-general">{preview_text}</p>}
		</div>
	)
}

export default ServiceCards
