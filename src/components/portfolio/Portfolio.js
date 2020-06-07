import React, { useEffect, useState } from 'react'
import Section from '../layout/Section'
import Card from './Card'
import Title from '../text/Title'
import { cases, disciplines } from '../../data/cases'
import useI18n from '../../hooks/use-i18n'
import styled from '@emotion/styled'

const Wrapper = styled('div')`
      background-color: ${props => props.theme.section.contact};
`

function Portfolio () {
	const i18n = useI18n()
	const [active, setActive] = useState(0)
	const [data, setData] = useState([])

	useEffect(() => {
		setData(cases)
	}, [])

	const toggle = (discipline, activeIndex) => {
		setActive(activeIndex)
		if (discipline === 'all') {setData(cases)} else {
			//Check if discipline is equal to tag
			const currentData = data.filter((obj) => i18n.t(obj.discipline).toLowerCase() === discipline)
			setData(currentData)
		}
	}

	return (
		<Wrapper className="section-wrapper">
			<Section>
				<div className="portfolio-links">
					{disciplines.map((d, i) => <p key={`portfolio-link${i}`}
												  onClick={() => toggle(i18n.t(d.title).toLowerCase(), i)}
												  className={`${i === active && 'active'}`}>{i18n.t(d.title)}</p>)}
				</div>
				<Title big title={'portfolio.title.header'} text="portfolio.title.text"/>
				<div className="portfolio off-balance">
					{data.map(
						({ image, discipline, title, client }, i) => <Card client={client} key={title + i} img={image}
																		   discipline={discipline} title={title}/>)}
				</div>
			</Section>
		</Wrapper>
	)
}

export default Portfolio
