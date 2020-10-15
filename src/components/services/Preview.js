import React from 'react'
import Section from '../layout/Section'
import Card from './Card'
import useI18n from '../../hooks/use-i18n'
import { previewServices } from '../../data/services'
import Title from '../text/Title'
import ReadMore from '@/text/ReadMore'
import Animation from '@/animation/Animation'

function Services () {
	const i18n = useI18n()
	return (
		<Section className="services-preview-section" id="home-page-services">
			<Animation animation="fade-up" delay="200">
				<Title title={'services.preview.title.header'} text={'services.preview.title.text'}/>
				<div className="services services-center">
					{previewServices.map((d, i) => {
						return (
							<Animation className="card-animatable" animation="fade-up" delay={i * 50}>
								<Card title={d.title} text={d.text} icon={d.icon} to={`services/${i18n.t(d.route)}`}/>
							</Animation>
						)
					})}
				</div>
				<Animation animation="fade-up" delay="400">
					<ReadMore className="read-more-portfolio" text="buttons.services" to="/services"/>
				</Animation>
			</Animation>
		</Section>

	)
}

export default Services
