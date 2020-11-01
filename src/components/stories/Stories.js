import React from 'react'
import Section from '../layout/Section'
import Title from '../titles/Title'
import Card from '@/stories/Card'
import Animation from '@/animation/Animation'
import Fade from "react-reveal";

const clients = ['form', 'esp', 'nwo']

function Stories (props) {
	return (
		<Section className="testimonial-section">
			<Fade bottom delay={200}>
				<Title basePath={'testimonials.header'} compact noSection/>
				<div className="stories">
					{clients.map((client, i) => {
						return (
							<Fade bottom delay={i * 400}>
								<div className="card-animatable">
									<Card client={client}/>
								</div>
							</Fade>
						)
					})}
				</div>
			</Fade>
		</Section>
	)
}

export default Stories
