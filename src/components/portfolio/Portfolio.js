import React from 'react'
import Section from '../layout/Section'
import styled from '@emotion/styled'
import Title from '@/utillities/titles/Title'
import CardFadeAnimation from '@/animation/CardFadeAnimation'
import PortfolioCard from '@/portfolio/PortfolioCard'

const Wrapper = styled(Section)`
        background: ${props => props.theme.home.portfolio};
 }`

function Portfolio ({ data, allProjects }) {

	const { page_title } = data
	const casesPath = 'content/written/case/nl'

	return (
		<Wrapper>
			<Title title={page_title.title} subHeader={page_title.subheader} header={page_title.header}/>
			<div className="cards-container">
				<CardFadeAnimation>
					{allProjects.map(({ title, card, info }) => <PortfolioCard project={card} client={info.client}
																			   basePath={`${casesPath}/${title.toLowerCase()}`}/>)}
				</CardFadeAnimation>
			</div>
		</Wrapper>
	)
}

export default Portfolio

