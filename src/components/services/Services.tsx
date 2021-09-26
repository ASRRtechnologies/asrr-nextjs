import React from 'react'
import Section from '@/modules/shared/section/Section'
import Title from '@/utillities/titles/Title'
import styled from '@emotion/styled'
import Grid from "@/modules/shared/grid/Grid";
import ServiceCards from "./ServiceCards";
import serviceStyles from "./serviceStyles.module.scss";
import AspectRatio from "@/library/aspect-ratio/AspectRatio";
import {Fade} from "react-awesome-reveal";

const Wrapper = styled(Section)`

`;

function Services({content, allServices}) {
	const {title, text, image, alt } = content.section;
	const basePath = `content/services/nl`;
	console.log(content);

	const breakPoints = {
		700: 2,
		400: 1,
		0: 1,
	}

	return (
		<Wrapper>
			<Title title={title} text={text}/>

			<div className={serviceStyles.services}>

				<div className={serviceStyles.gridWrapper}>
					<Grid breakpoints={breakPoints} fade={true} maxWidth="1400px">
						{allServices.map((service) => {
							return (
								<ServiceCards content={service} basePath={basePath}/>
							)
						})}
					</Grid>
				</div>

				<Fade className={serviceStyles.image}>
					<div >
						<AspectRatio x={3} y={4}>
							<img src={`${basePath}/${image}`} alt={alt}/>
						</AspectRatio>
					</div>
				</Fade>
			</div>
		</Wrapper>
	)
}

export default Services
