import React from 'react'
import Section from '@/modules/shared/section/Section'
import Title from '@/utillities/titles/Title'
import styled from '@emotion/styled'
import Grid from "@/modules/shared/grid/Grid";
import ServiceCards from "./ServiceCards";

const Wrapper = styled(Section)`

`;

function Services({content, allServices}) {
	const {title, text} = content.section;
	const basePath = `content/services/nl`;
	console.log(content);

	const breakPoints = {
		1200: 3,
		600: 2,
		400: 1,
		0: 1,
	}

	return (
		<Wrapper>
			<Title title={title} text={text}/>
			<div className={}>
				<Grid breakpoints={breakPoints} fade={true} maxWidth="1400px">
					{allServices.map((service) => {
						return (
							<ServiceCards content={service} basePath={basePath}/>
						)
					})}
				</Grid>
			</div>
		</Wrapper>
	)
}

export default Services
