import React from 'react'
import Section from '../layout/Section'
import Title from '../utillities/titles/Title'
import styled from '@emotion/styled'
import { useTheme } from '../../context/theme/ThemeContext'
import PictureFallback from '@/utillities/titles/PictureFallback'
import CardFadeAnimation from '@/animation/CardFadeAnimation'

const Wrapper = styled(Section)`
        background: ${props => props.theme.home.techstack};
 }`;

function TechStack ({ data, basePath }) {

	const darkmode = useTheme().dark;

	const Tech = ({ image, fallback, alt, className }) => {
		return (
			<div className="tech-grid-cell">
				<PictureFallback fallbackImage={`${basePath}/${fallback}`} image={`${basePath}/${image}`}
								 alt={alt} className={className}/>
			</div>
		)
	};

	return (
		<Wrapper>
			<Title title={data.title} subHeader={data.subheader} header={data.header}/>
			<div className="techstack">
				<div className="techgrid">
					<CardFadeAnimation>
						{data.technologies.map((data, i) => (
							<Tech className={darkmode ? 'tech-image tech-dark' : 'tech-image '} image={data.image_webp}
								  fallback={data.image} alt={data.alt}/>
						))}
					</CardFadeAnimation>
				</div>
			</div>
		</Wrapper>
	)
}

export default TechStack

