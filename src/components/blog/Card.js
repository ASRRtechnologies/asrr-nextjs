import React from 'react'
import image from '#/clients/form/case-image.jpg'
import styled from '@emotion/styled'
import ReadMore from '@/text/ReadMore'
import useI18n from '../../hooks/use-i18n'

const InnerWrapper = styled('div')`
        box-shadow: ${props => props.theme.card.shadow};
        background: ${props => props.theme.card.background};
`;

function Card (props) {
	const i18n = useI18n();

	return (
		<div className="blog-card">
			<InnerWrapper className="blog-card-inner">
				<div className="blog-card-image">
					<img src={image} alt="image"/>
				</div>

				<div className="blog-card-text">
					<h4>Ontwikkeling</h4>
					<h2>This is a text title</h2>
					<p>Financial institutions are investing big in open banking, but what are the use cases
						they’re most interested in? We surveyed 290 European bankers to find out what
						immediate opportunities they have in sight. Here are the results.</p>
					<ReadMore noAnimation={true} className="read-more-portfolio" text="buttons.portfolio" to="/portfolio"/>
				</div>
			</InnerWrapper>
		</div>
	)
}

export default Card
