import React, { useContext, useEffect, useState } from 'react'
import { cases } from '../../data/cases'
import Section from '@/layout/Section'
import styled from '@emotion/styled'
import useI18n from '../../hooks/use-i18n'
import { AnimationContext } from '../../context/animations/AnimationContext'
import Landing from '../../components/landing/Landing'
import Title from '../../components/text/Title'

const Wrapper = styled('div')`
      background-color: ${props => props.theme.layout};
`

function Page ({ data }) {
	const i18n = useI18n()
	const animate = useContext(AnimationContext)
	const [bullets, setBulletPoints] = useState('')

	useEffect(() => {
		(animate.appLoaded) ? animate.animation.secondLoad() : null

		setBulletPoints(i18n.t(data.bullets))
		console.log(bullets)

	}, [])

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

					<Title title={data.title_1}/>


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

