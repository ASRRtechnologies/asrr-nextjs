import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
import PictureFallback from '@/utillities/titles/PictureFallback'
import { useTheme } from '../../context/theme/ThemeContext'

const Card = styled('div')`
        box-shadow: ${props => props.theme.card.background};
        background-color: ${props => props.theme.card.background};
`

function PortfolioCard ({ project, fileName, info }) {

	const { image, image_webp, alt, title, text } = project
	const url = `portfolio/case/${fileName.toLowerCase()}`
	const baseUrl = `content/written/case/nl/${fileName.toLowerCase()}`
	const darkmode = useTheme().dark

	const ReadMore = ({to}) => {
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
		<Link href={`/portfolio/case`}>
			<a>
				<Card className="card-rectangle">
					<div className="card-rectangle-image">
						<div className="card-rectangle-image-aspect-ratio zoom-in-effect-minimal">
							<PictureFallback image={`${baseUrl}/${image_webp}`} fallbackImage={`${baseUrl}/${image}`}
											 alt={alt}/>
						</div>
					</div>

					<div className="card-rectangle-text-container">
						<div className="card-rectangle-text">
							<div className="card-rectangle-tags">
								{info.tag && info.tag.map(({ tag }) => {
									return (
										<span>
											<h1 className="font-card-tags">{tag}</h1>
										</span>
									)
								})}
							</div>
							<h2 className="font-card-title">{title}</h2>
							{text && <h3 className="font-general">{text}</h3>}
						</div>

						<span>
							<h4 className="font-card-header">{info.client}</h4>
							<ReadMore to={url}/>
						</span>
					</div>

				</Card>
			</a>
		</Link>
	)
}

export default PortfolioCard
