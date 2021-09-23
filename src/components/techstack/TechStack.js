import React from 'react'
import Section from '../modules/shared/section/Section'
import Title from '../utillities/titles/Title'
import styled from '@emotion/styled'
import { useTheme } from '../../context/theme/ThemeContext'
import PictureFallback from '@/utillities/titles/PictureFallback'
import CardFadeAnimation from '@/animation/CardFadeAnimation'
import Grid from "@/modules/shared/grid/Grid";

const Wrapper = styled(Section)`
        background: ${props => props.theme.home.techstack};
 }`;

function TechStack ({ data, basePath }) {
	const darkmode = useTheme().dark;

	const Tech = ({ image, fallback, alt, className }) => {
		return (
			<div className="tech-grid-cell">
				<PictureFallback fallbackImage={`${basePath}/${fallback}`} />
			</div>
		)
	};

	const breakPoints = {
		1400: 4,
		1200: 3,
		1000: 2,
	}

	return (
		<Section>
			<Title title={data.title} subHeader={data.subheader} header={data.header}/>
			<Grid col={2} breakpoints={breakPoints}>
				{data.technologies.map((data, i) => (
					<img className={darkmode ? 'tech-image tech-dark' : 'tech-image '} src={`${basePath}/${data.image}`}
						 alt={data.alt}/>
				))}
			</Grid>
		</Section>
	)
}

export default TechStack

