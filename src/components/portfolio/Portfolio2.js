import React, { useEffect, useState, useRef } from 'react'
import Section from '../layout/Section'
import Card from './Card'
import Title from '../text/Title'
import { portfolio, disciplines } from '../../data/portfolio'
import useI18n from '../../hooks/use-i18n'
import styled from '@emotion/styled'
import ReactAnimationFrame from 'react-animation-frame';

const Wrapper = styled('div')`
      background-color: ${props => props.theme.section.contact};
`

function Portfolio2 () {
	const i18n = useI18n()
	const [active, setActive] = useState(0)
	const [data, setData] = useState([]);
	const container = useRef(null);
	useEffect(() => {
		setData(portfolio)
	}, [])



	useEffect(() => {
		window.addEventListener("wheel", (e) => {
			(e.deltaY === 100 ? container.current.scrollLeft +=50 : container.current.scrollLeft -=50);
		})
	}, [])

	return (
				<div className="portfolio row" ref={container}>
					{data.map(
						({ image, discipline, title, client }, i) => <Card client={client} key={title + i} img={image}
																		   discipline={discipline} title={title}/>)}
				</div>
	)
}

export default ReactAnimationFrame(Portfolio2)
