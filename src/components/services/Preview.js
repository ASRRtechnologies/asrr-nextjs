import React from 'react'
import Section from '../layout/Section'
import Card from './Card'
import ReadMore from '../text/ReadMore'
import Title from '../text/Title'
import useI18n from '../../hooks/use-i18n'
import styled from '@emotion/styled'

const Wrapper = styled('div')`
      background-color: ${props => props.theme.section.services}; 
`

function Services (props) {
	const i18n = useI18n()
	return (
		<Wrapper className="center-content">
			<Section>
				<Title title={'Services'} text="lorem ipsum hahahahaha"/>
				<div className="services">
					<Card/>
					<Card/>
					<Card/>
					<Card/>
					<Card/>
					<Card/>
				</div>
				<ReadMore margin={true} to="/services">{i18n.t('buttons.see.services')}</ReadMore>
			</Section>
		</Wrapper>
	)
}

export default Services
