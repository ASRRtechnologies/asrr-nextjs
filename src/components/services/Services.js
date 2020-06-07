import React from 'react'
import Section from '../layout/Section'
import Card from './Card'
import Title from '../text/Title'
import useI18n from '../../hooks/use-i18n'
import styled from '@emotion/styled'
import {services } from '../../data/services'

const Wrapper = styled('div')`
      background-color: ${props => props.theme.section.services}; 
`

function Services (props) {
	const i18n = useI18n()
	return (
		<Wrapper className="section-wrapper">
			<Section>
				<Title big title={i18n.t('contact.title.header')} text={i18n.t('contact.title.text')}/>
				<div className="services">
					{services.map((d) => <Card title={d.title} text={d.text}/>)}
				</div>
			</Section>
		</Wrapper>
	)
}

export default Services
