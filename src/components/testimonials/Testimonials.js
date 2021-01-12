import Section from '@/layout/Section'
import Title from '@/utillities/titles/Title'
import React from 'react'
import styled from '@emotion/styled'
import TestimonialCards from '@/testimonials/TestimonialCard'
import CardFadeAnimation from '@/animation/CardFadeAnimation'

const Wrapper = styled(Section)`
        background: ${props => props.theme.home.stories};
 }`

function Preview ({ data, basePath }) {
	return (
		<Wrapper>
			<Title title={data.title} header={data.header} subHeader={data.subheader}/>
			<div className="cards-container">
				<CardFadeAnimation>
					{data.cards.map((data) => <TestimonialCards data={data} basePath={basePath}/>)}
				</CardFadeAnimation>
			</div>
		</Wrapper>
	)
}

export default Preview
