import React from 'react'
import Section from '@/layout/Section'
import Title from '@/utillities/titles/Title'
import ReadMore from '@/utillities/text/ReadMore'
import styled from '@emotion/styled'
import { Fade } from 'react-awesome-reveal'
import ServiceCards from '@/utillities/cards/ServiceCards'

const Wrapper = styled(Section)`
        background: ${props => props.theme.home.services};
 }`

function Preview ({ data, basePath }) {

	return (
		<Wrapper>

			<Title title={data.title} header={data.header} subHeader={data.subheader}/>

			<div className="cards-container">
				<Fade cascade delay={200} duration={500} fraction={0.3} triggerOnce>
					{data.services.map((data) => {
						return (
							<ServiceCards data={data} basePath={basePath}/>
						)
					})}
				</Fade>
			</div>

			<div className="read-more-wrapper">
				<ReadMore className="subheader" to="/services" text={data.button}/>
			</div>

		</Wrapper>
	)
}

export default Preview
