import React, { useContext, useEffect, useState } from 'react'
import { cases } from '../../data/cases'
import Section from '@/layout/Section'
import styled from '@emotion/styled'
import useI18n from '../../hooks/use-i18n'
import { AnimationContext } from '../../context/animations/AnimationContext'
import Landing from '../../components/landing/Landing'
import Title from '../../components/text/Title'
import Interweave from "interweave";

const Wrapper = styled('div')`
      background-image: ${props => props.theme.layout};
`

function Page ({ data }) {
	const i18n = useI18n()
	const animate = useContext(AnimationContext)
	const [bullets, setBulletPoints] = useState([]);
	const [card, setCard] = useState(0);

	useEffect(() => {
		(animate.appLoaded) ? animate.animation.secondLoad() : null
		setBulletPoints(i18n.t(data.bullets))
	}, [] );

	const settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
				},
			},
		],
	}

	return (
		<>
			<Landing/>
			<Wrapper className="section-wrapper">
				<Section>
					<Title title={data.introduction.title} text={data.introduction.text}/>

					<div className="why-asrr">
						<div className="why-asrr-points">
							{/*{bullets.map((d, i) => <span onClick={() => setCard(i)} className={`${i === card && "selected-line"}`}><p>{d.key}</p></span>)}*/}
							{bullets.map((d, i) => <span onClick={() => setCard(i)} className={`${i === card && "selected-line"}`}>{<Interweave content={d.key}/>
							}</span>)}
						</div>
						{/*{console.log(data.bullets)}*/}

						<div className="why-asrr-text">
							{card === 0 ? <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,</p> : null}
							{card === 1 ? <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. o ligula eget dolor. Aenean massa. Cum sociis natoque penatibus e Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,</p> : null}
							{card === 2 ? <p>Lorem ipsum dolor sit amet, consectetupenatibus et magnis dultricies nec, pellentesque eu,</p> : null}
						</div>
					</div>


					{/*<Animation animation="fade-up" delay="500">*/}
					{/*<Slider {...settings}>*/}
					{/*{data.slider.map((d, i) => {*/}
					{/*return (*/}
					{/*<div key={d} className={`portfolio-page-slider-card ${i===0 && "no-margin"}`}>*/}
					{/*<img src={d}/>*/}
					{/*</div>*/}
					{/*)*/}
					{/*})}*/}
					{/*</Slider>*/}
					{/*</Animation>*/}

				</Section>
			</Wrapper>
		</>
	)
}

Page.getInitialProps = ({ query }) => {
	let data = cases.find(data => data.id === query.portfolio)
	console.log(data)
	return {
		data,
	}
}

export default Page

