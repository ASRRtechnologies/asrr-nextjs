import React, { useEffect, useState } from 'react'
import Section from '../layout/Section'
import Card from './Card'
import Title from '../text/Title'
import { portfolio, disciplines } from '../../data/portfolio'
import { projects } from '../../data/projects'
import useI18n from '../../hooks/use-i18n'
import styled from '@emotion/styled'

const Wrapper = styled('div')`
      background-color: ${props => props.theme.layout};
`

function Portfolio () {
	const i18n = useI18n();
	const [active, setActive] = useState(0);
	const [data, setData] = useState([]);

	useEffect(() => {
		setData(projects)
	}, []);

	const toggle = (discipline, activeIndex) => {
		setActive(activeIndex)
		if (discipline === 'all') {setData(portfolio)} else {
			//Check if discipline is equal to tag
			const currentData = portfolio.filter((obj) => i18n.t(obj.discipline).toLowerCase() === discipline)
			setData(currentData)
		}
	}

	return (
		<Wrapper className="section-wrapper">
			<Section>
				{/*<div className="case-links">*/}
					{/*{disciplines.map((d, i) => <p key={`case-link${i}`}*/}
												  {/*onClick={() => toggle(i18n.t(d.title).toLowerCase(), i)}*/}
												  {/*className={`${i === active && 'active'}`}>{i18n.t(d.title)}</p>)}*/}
				{/*</div>*/}
				<Title title={'case.title.header'} text="portfolio.title.text"/>
				<div className="portfolio off-balance">
					{data.map(
						( {card} , i) => <Card route={card.route} client={card.client} key={card.title + i} img={card.image}
																		   discipline={card.discipline} title={card.title}/>)}
				</div>
			</Section>
		</Wrapper>
	)
}

export default Portfolio
