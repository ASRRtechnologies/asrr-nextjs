import React, { useContext, useEffect } from 'react'
import { services } from '../../data/services'
import Section from '@/layout/Section'
import styled from '@emotion/styled'
import useI18n from '../../hooks/use-i18n'
import { AnimationContext } from '../../context/animations/AnimationContext'
import Title from '@/text/Title'
import Button from '@/Button'
import Animation from '@/animation/Animation'

const Wrapper = styled('div')`
      background-image: ${props => props.theme.layout};
`;

function Contact ({ className, title }) {
	return (
		<div className={`contact preview ${title}`}>
			<Title className={`${title} title-button`} title={'contact.preview.title.header'}
				   text={'contact.preview.title.text'}/>
			<Button custom to="/contact" title="buttons.contact"/>
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
				<Section className="service-page">
					<Animation animation="fade-up" delay="300">
						<Title title={data.title} text={data.text}/>
					</Animation>
					<Animation animation="fade-up" delay="300">
						<Contact/>
					</Animation>
					{console.log(data)}
				</Section>
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

