import React from 'react'
import Section from '../layout/Section'
import Title from '../titles/Title'
import styled from '@emotion/styled'
import react from '#/techstack/react-black-min.webp'
import reactnative from '#/techstack/react-native-black-min.webp'
import spring from '#/techstack/spring-boot-logo-black-min.webp'
import kubernetes from '#/techstack/kubernetes-min.webp'
import docker from '#/techstack/docker-black-min.webp'
import nextjs from '#/techstack/nextjs-min.webp'
import { useTheme } from '../../context/theme/ThemeContext'
import Fade from "react-reveal/Fade";
import Image from 'next/image'


const Wrapper = styled(Section)`
        background: ${props => props.theme.home.techstack};
 }`

const techList = [
	{ logo: react, alt: 'react' },
	{ logo: spring, alt: 'spring boot' },
	{ logo: reactnative, alt: 'react-native' },
	{ logo: kubernetes, alt: 'kubernetes' },
	{ logo: docker, alt: 'docker' },
	{ logo: nextjs, alt: 'nextjs' },
]

const Tech = ({ image, alt, className }) => {
	return (
		<div className="tech-grid-cell">
			{/*<Image width={300} height={100} layout="responsive" className={className} src={image} alt={alt}/>*/}
			<img className={className} src={image} alt={alt}/>
		</div>
	)
}

function TechStack ({ preview }) {

	const darkmode = useTheme().dark
	console.log(darkmode.dark)

	return (
		<Wrapper>
			<Title className="title-margin-small" basePath={'portfolio.preview.header'} compact noSection/>
			<Fade bottom>
				<div className="techstack">
					<div className="techgrid">
						{techList.map((data, i) => <Tech className={darkmode ? 'tech-image tech-dark' : 'tech-image '}
														 image={data.logo} alt={data.alt}/>)}
					</div>
				</div>
			</Fade>

		</Wrapper>
	)
}

export default TechStack

