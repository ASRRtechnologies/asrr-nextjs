import React, { useEffect, useState } from 'react'
import Section from '../layout/Section'
import Title from '../utillities/titles/Title'
import { portfolio } from '../../data/portfolio'
import ReadMore from '@/utillities/text/ReadMore'
import styled from '@emotion/styled'
import useI18n from '../../hooks/use-i18n'
import PortfolioCard from '@/portfolio/PortfolioCard'
import { Fade } from 'react-awesome-reveal'

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

				<Fade cascade delay={200} duration={500} fraction={0.3} triggerOnce>
					{cases.map((data) => {
						return (
							<PortfolioCard cases={data}/>
						)
					})}
				</Fade>

			</div>

			<div className="read-more-wrapper">
				<ReadMore className="subheader" to="/portfolio" text={data.button}/>
			</div>

		</Wrapper>
	)
}

export default Portfolio

