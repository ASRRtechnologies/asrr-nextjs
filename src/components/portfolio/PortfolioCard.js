import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'

const Card = styled('div')`
        box-shadow: ${props => props.theme.card.background};
        background-color: ${props => props.theme.card.background};
`

function PortfolioCard ({ cases }) {

	const { image } = cases

	return (
 			<Link href={`/portfolio/case`}>
				<a>
					<Card className="card-rectangle">

						<div className="card-rectangle-image">
							<div className="card-rectangle-image-aspect-ratio zoom-in-effect-minimal">
								<img src={image} alt="image"/>
							</div>
						</div>

						<div className="card-rectangle-text-container">
							<div className="card-rectangle-text">
								<h1 className="font-card-header">WEB DEVELOPMENT</h1>
								<h2 className="font-card-title">Building a web application</h2>
								<h3 className="font-general">Lorem ipsum dolor sit amet, consectetur
									adipisicing
									elit. Aspernatur corporis culpa dicta distinctio dolorem</h3>
							</div>

							<span>
								<h4 className="font-card-subheader">Form Architecture</h4>
								<h5 className="font-card-label">31 December 2020</h5>
							</span>
						</div>

					</Card>
				</a>
			</Link>
 	)
}

export default PortfolioCard
