import React from 'react'
import Section from '../layout/Section'
import Card from './Card'
import Title from '../text/Title'
import useI18n from '../../hooks/use-i18n'
import styled from '@emotion/styled'
import {services } from '../../data/services'
import Preview from "@/contact/Preview";

const Wrapper = styled('div')`
      background-color: ${props => props.theme.section.services}; 
`

function Services (props) {
	const i18n = useI18n();
	return (
		<Wrapper className="section-wrapper">
			<Section>
				<Title title={'services.header.title'} text="services.header.text"/>
				<div className="services">
					{services.map((d) => <Card title={d.title} text={d.text}/>)}
				</div>
				<Preview/>
			</Section>
		</Wrapper>
	)
}

export default Services
