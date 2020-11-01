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
			<Fade animation="fade-up" delay={200}>
				<Title basePath={'testimonials'} id="header" compact/>
				<div className="stories">
					{clients.map((client, i) => {
						return (
							<Fade  animation="fade-up" delay={i * 200}>
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
