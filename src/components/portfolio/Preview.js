import React, { useEffect, useState } from 'react'
import Section from '../layout/Section'
import Title from '../utillities/titles/Title'
import { portfolio } from '../../data/portfolio'
import ReadMore from '@/utillities/text/ReadMore'
import styled from '@emotion/styled'
import PortfolioCard from '@/portfolio/PortfolioCard'
import CardFadeAnimation from '@/animation/CardFadeAnimation'

const Wrapper = styled(Section)`
        background: ${props => props.theme.home.portfolio};
 }`

function Portfolio ({ data, selectedProjects }) {

	const casesPath = 'content/written/case/nl'

	return (
		<Wrapper>

			<Title title={data.title} header={data.header} subHeader={data.subheader}/>

			<div className="cards-container">

				<CardFadeAnimation>
					{selectedProjects.map(({title, card, info}) => {
						return (
							<PortfolioCard project={card} info={info} basePath={`${casesPath}/${title.toLowerCase()}`}/>
						)
					})}
				</CardFadeAnimation>

			</div>

			<div className="read-more-wrapper">
				<ReadMore className="subheader" to={data.button.url} text={data.button.title}/>
			</div>

		</Wrapper>
	)
}

export default Portfolio

