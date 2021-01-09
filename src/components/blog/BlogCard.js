import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
import PictureFallback from '@/utillities/titles/PictureFallback'
import ReadMore from "@/utillities/text/ReadMore";

const Card = styled('div')`
        box-shadow: ${props => props.theme.card.background};
        background-color: ${props => props.theme.card.background};
`

function BlogCard ({ data, basePath }) {
	const { alt, author, date, image, image_webp, tag, text, title, url } = data

	return (
		<Link href={url}>
			<a>
				<Card className="card-rectangle">

					<div className="card-rectangle-image">
						<div className="card-rectangle-image-aspect-ratio zoom-in-effect-minimal">
							<PictureFallback image={`${basePath}/${image_webp}`} fallbackImage={`${basePath}/${image}`}
											 alt={alt}/>
						</div>
					</div>

					<div className="card-rectangle-text-container">

						<div className="card-rectangle-text">
							<h1 className="font-card-header">{tag}</h1>
							<h2 className="font-card-title">{title}</h2>
							<h3 className="font-general">{text}</h3>
						</div>

						<span>
							<h4 className="font-card-subheader">{author}</h4>
							<h5 className="font-card-label">{date}</h5>
							<ReadMore className="font-card-read-more" to={url}/>
						</span>

					</div>

				</Card>
			</a>
		</Link>
	)
}

export default BlogCard
