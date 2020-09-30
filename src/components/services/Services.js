import React from 'react'
import Section from '../layout/Section'
import Card from './Card'
import Title from '../text/Title'
import { services } from '../../data/services'
import Contact from '@/contact/Preview'
import Animation from '@/animation/Animation'

function Services (props) {
	return (
		<Section id="services-page">
			<Animation animation="fade-up" delay="200">
				<Title title={'services.header.title'}/>
				<div className="services">
					{
						services.map((d) => {
								return (
									<Animation className="card-animatable" animation="fade-up" delay="150">
										<Card title={d.preview_title} text={d.preview_text} icon={d.icon}
											  to={`services/${d.id}`}/>
									</Animation>
								)
							},
						)}
				</div>
				<Contact className="last-section-padding"/>
			</Animation>
		</Section>
	)
}
export default Services
