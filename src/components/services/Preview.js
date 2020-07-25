import React from 'react'
import Section from '../layout/Section'
import Card from './Card'
import ReadMore from '../text/ReadMore'
import Title from '../text/Title'
import useI18n from '../../hooks/use-i18n'
import styled from '@emotion/styled'
import { previewServices } from '../../data/services'

const Wrapper = styled('div')`
      background-color: ${props => props.theme.section.services}; 
`

function Services () {
	const i18n = useI18n()
	return (
		<Wrapper className="section-wrapper">
			<Section>
				<Title big title={'services.preview.title.header'} text={'services.preview.title.text'}/>
				<div className="services">
					{previewServices.map((d) => <Card title={d.title} text={d.text}/>)}
				</div>
				<ReadMore className="read-more-portfolio" to="/services">{i18n.t('buttons.see.services')}</ReadMore>
			</Section>
		</Wrapper>
	)
}

export default Services
