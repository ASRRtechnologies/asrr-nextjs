import React from 'react'
import Section from '../layout/Section'
import Card from './Card'
import Title from '../text/Title'
import { portfolio } from '../../data/portfolio'
import Animation from '@/animation/Animation'
 import { FadeUp } from '@/animation/FadeUp'
import { IntersectionObserver } from '@/animation/IntersectionObserver'
import Contact from '../../components/contact/Preview'

// import StaggerContainer from "@/animation/StaggerContainer";

function Portfolio () {
	return (
		<Section id="portfolio-page">
			<Animation animation="fade-up" delay="200">
				<Title title={'portfolio.preview.title.header'} text={'portfolio.preview.title.text'}/>
				{/*<div className="portfolio portfolio-preview">*/}
				<IntersectionObserver className="portfolio portfolio-center" key={'port'}>
					{portfolio.map(({ image, discipline, title, client, id }, i) => {
						return (
							<FadeUp className="card-animatable" delay={i * 0.2}>
								<Card route={id} client={client}
									  img={image}
									  discipline={discipline}
									  title={title}/>
							</FadeUp>
						)
					})}
				</IntersectionObserver>
				{/*</div>*/}
				<Contact className="last-section-padding"/>
			</Animation>
		</Section>

	)
}

export default Portfolio
