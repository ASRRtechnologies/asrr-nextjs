import React from 'react'
import Section from '@/layout/Section'
import Title from '@/utillities/titles/Title'
import ReadMore from '@/utillities/text/ReadMore'
import styled from '@emotion/styled'
import ServiceCards from '@/utillities/cards/ServiceCards'
import CardFadeAnimation from '@/animation/CardFadeAnimation'

const Wrapper = styled(Section)`
        background: ${props => props.theme.home.services};
 }`;

function Preview ({data, cards}) {

	const basePath = `content/service_page/nl`;

	return (
		<Wrapper>
			<Title title={data.title} header={data.header} subHeader={data.subheader}/>
			<div className="cards-container">
				<CardFadeAnimation>
					{cards.card.map((data) => {
						return (
							<ServiceCards data={data} basePath={basePath}/>
						)
					})}
				</CardFadeAnimation>
			</div>
			<div className="read-more-wrapper">
				<ReadMore className="subheader" to="/diensten" text={data.button.title}/>
			</div>
		</Wrapper>
	)
}

export default Preview
