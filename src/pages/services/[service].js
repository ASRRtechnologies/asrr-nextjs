import React, { useContext, useEffect } from 'react'
import { services } from '../../data/services'
import Section from '@/layout/Section'
import styled from '@emotion/styled'
import useI18n from '../../hooks/use-i18n'
import { AnimationContext } from '../../context/animations/AnimationContext'
import Title from '../../components/text/Title'
import Button from '@/Button'
import Animation from '../projects/project'

const Wrapper = styled('div')`
      background-image: ${props => props.theme.layout};
`

function Contact ({ className, title }) {
	return (
		<div className={`contact preview ${title}`}>
			<Title className={`${title} title-button`} title={'contact.preview.title.header'}
				   text={'contact.preview.title.text'}/>
			<Button custom to="/contact" title="Let's Get In Touch"/>
		</div>
	)
}

function Page ({ data, query }) {
	const i18n = useI18n()
	const animate = useContext(AnimationContext)

	useEffect(() => {
		(animate.appLoaded) ? animate.animation.secondLoad() : null
	}, [])

	return (
		<>
			<Wrapper className="section-wrapper">
				<Section className="service-page">
					<Animation animation="fade-up" delay="300">
						<Title title={data.title} text={data.text} className="left-title"/>
					</Animation>
					<Animation animation="fade-up" delay="300">
						<Contact title="left-title"/>
					</Animation>
					{console.log(data)}
				</Section>
			</Wrapper>
		</>
	)
}

Page.getInitialProps = ({ query }) => {
	let data = services.find(data => data.id || data.id_nl === query.services)
	return {
		data,
	}
}

export default Page

