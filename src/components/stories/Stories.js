import React from 'react'
import Section from '../layout/Section'
import Title from '../text/Title'
import Card from '@/stories/Card'
import Animation from '@/animation/Animation'

const clients = ['form', 'esp', 'nwo']

function Stories (props) {
	return (
		<Section className="testimonial-section">
			<Animation animation="fade-up" delay={200}>
				<Title title={'stories.title.header'} text={'stories.title.text'}/>
				<div className="stories">
					{clients.map((client, i) => {
						return (
							<Animation className="card-animatable" animation="fade-up" delay={i * 200}>
								<Card client={client}/>
							</Animation>
						)
					})}
				</div>
			</Animation>
		</Section>
	)
}

export default Stories
