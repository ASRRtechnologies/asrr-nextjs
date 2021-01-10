import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
import PictureFallback from '@/utillities/titles/PictureFallback'
import { useTheme } from '../../context/theme/ThemeContext'

const Card = styled('div')`
        box-shadow: ${props => props.theme.card.background};
        background-color: ${props => props.theme.card.background};
`

function BlogCard ({ article, info, type, name }) {

	const {writtenType, author, date} = info;
	const { alt, image, image_webp, text, title, url } = article
	const darkmode = useTheme().dark;

	const newsPath = 'content/written/nieuws/nl'
	const articlesPath = 'content/written/artikel/nl'

	const basePath = `${type.toLowerCase() === 'artikel' ? articlesPath : newsPath}/${name.toLowerCase()}`

	const ReadMore = ({ to, text }) => {
		return (
			<Link href={to}>
				<a className={`font-card-read-more read-more ${darkmode
					? 'animated-link-light'
					: 'animated-link-dark'}`}>
					Lees meer
				</a>
			</Link>
		)
	}

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
							<div className="card-rectangle-tags">
								{writtenType && writtenType.map(({ tag }) => {
									return (
										<span>
											<h1 className="font-card-tags">{tag}</h1>
										</span>
									)
								})}
							</div>
							<h2 className="font-card-title">{title}</h2>
							<h3 className="font-general">{text}</h3>
						</div>

						<span>
							<h4 className="font-card-header">{author}</h4>
							<h5 className="font-card-subheader">{date}</h5>
							<ReadMore to={url}/>
						</span>

					</div>

				</Card>
			</a>
		</Link>
	)
}

export default BlogCard
