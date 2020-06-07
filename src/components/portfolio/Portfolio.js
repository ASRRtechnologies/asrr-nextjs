import React, { useEffect, useState } from 'react'
import Section from '../layout/Section'
import Card from './Card'
import ReadMore from '../text/ReadMore'
import Title from '../text/Title'
import { cases } from '../../data/cases'

const links = [
	{ name: 'ALL' },
	{ name: 'BIM' },
	{ name: 'GENERAL' },
];

function Portfolio (props) {

	const [active, setActive] = useState(0);
	const [data, setData] = useState([]);

	useEffect(() => {
		setData(cases);
		console.log(23);
	}, []);

	const toggle = (tag, activeIndex) => {
		setActive(activeIndex);
		if (tag === 'all') {setData(cases)} else {
			const currentData = data.filter((obj) => obj.tag === tag);
			setData(currentData)
		}
	};

	return (
		<Section>
			<div className="portfolio-links">
				{links.map((d, i) => <p key={`portfolio-link${i}`}
										onClick={() => toggle(d.name.toLowerCase(), i)}
										className={`${i === active && 'active'}`}>{d.name}</p>)}
			</div>
			<Title big title={'Portfolio'} text="lorem ipsum hahahahaha"/>
			<div className="portfolio">
				{data.map(({ image, tag, title }, i) => <Card key={title + i} img={image} tag={tag} title={title}/>)}
			</div>
			<ReadMore to="/" text="See all Projects"/>
		</Section>
	)
}

export default Portfolio
