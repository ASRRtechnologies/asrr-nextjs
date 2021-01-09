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

function Portfolio ({ data, basePath }) {

	const [cases, setCases] = useState([])

	useEffect(() => {
		setCases(portfolio.slice(0, 3))
	}, [])

	return (
		<Wrapper>

			<Title title={data.title} header={data.header} subHeader={data.subheader}/>

			<div className="cards-container">

				<CardFadeAnimation>
					{data.cards.map((portfolioCase) => {
						return (
							<PortfolioCard cases={portfolioCase} basePath={basePath}/>
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

