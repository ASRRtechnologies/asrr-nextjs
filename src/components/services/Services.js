import React from 'react'
import Section from '../layout/Section'
import styled from '@emotion/styled'
import Card from '@/services/Card'
import CardFadeAnimation from '@/animation/CardFadeAnimation'
import { Fade } from 'react-awesome-reveal'

const Wrapper = styled(Section)`
        background: ${props => props.theme.layout};
`

function Services ({ data }) {

	const basePath = `content/service_page/nl`

	return (
		<Wrapper className="no-landing">
			<div className="services">
				{data.card.map((service) => {
					return (
							<div className="service-card-wrapper card-margin-bottom">
								<Card route={`/${service.url}`} basePath={basePath} data={service}/>
							</div>
 					)
				})}
			</div>
		</Wrapper>
	)
}

export default Services
