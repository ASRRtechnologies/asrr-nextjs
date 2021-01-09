import React from 'react'
import Section from '../layout/Section'
import styled from '@emotion/styled'
import Title from '@/utillities/titles/Title'
import CardFadeAnimation from '@/animation/CardFadeAnimation'
import PortfolioCard from '@/portfolio/PortfolioCard'

const Wrapper = styled(Section)`
        background: ${props => props.theme.home.portfolio};
 }`

function Portfolio ({ data, basePath, allProjects }) {

	const { page_title } = data

	{console.log(allProjects)}

	return (
		<Wrapper>
			<Title title={page_title.title} subHeader={page_title.subheader} header={page_title.header}/>
			<div className="cards-container">
				<CardFadeAnimation>
					{allProjects.map(({ card }) => <PortfolioCard project={card} basePath={basePath}/>)}
				</CardFadeAnimation>
			</div>
		</Wrapper>
	)
}

export default Portfolio

