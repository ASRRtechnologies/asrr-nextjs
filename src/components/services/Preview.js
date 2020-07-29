import React from 'react'
import Section from '../layout/Section'
import Card from './Card'
import ReadMore from '../text/ReadMore'
import Title from '../text/Title'
import useI18n from '../../hooks/use-i18n'
import styled from '@emotion/styled'
import { previewServices } from '../../data/services'
import Chevron from "@/icons/Chevron";

const Wrapper = styled('div')`
      // background-color: ${props => props.theme.section.services}; 
      background-color: transparent;
`

function Services () {
	const i18n = useI18n();
	return (
		<Wrapper className="section-wrapper margin-top">
			{/*<Section>*/}
				<div className="services service-preview">
					{previewServices.map((d) => {
						{console.log(d)}
						return(
								<Card title={d.title} text={d.text} icon={d.icon}/>
							)




					})}
				</div>
				<ReadMore className="read-more-portfolio" to="/services">{i18n.t('buttons.see.services')}</ReadMore>
			{/*</Section>*/}
		</Wrapper>
	)
}

export default Services
