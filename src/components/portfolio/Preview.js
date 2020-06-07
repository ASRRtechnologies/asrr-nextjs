import React, { useState } from 'react'
import Section from '../layout/Section'
import Card from './Card'
import ReadMore from '../text/ReadMore'
import Title from '../text/Title'
import { cases } from '../../data/cases'
import useI18n from '../../hooks/use-i18n'
import styled from '@emotion/styled'

const Wrapper = styled('div')`
      background-color: ${props => props.theme.section.portfolio}; 
`

function Preview (props) {
	const i18n = useI18n()
	const [active, setActive] = useState(0)
	return (
		<Wrapper style={{width:"100vw"}}>
			<Section>
				<Title title={i18n.t('portfolio.preview.title.header')} text={i18n.t('portfolio.preview.title.text')}/>
				<div className="portfolio">
					{cases.map(({ image, tag, title }) => <Card img={image} tag={tag} title={title}/>)}
				</div>
				<ReadMore margin={true} to="/portfolio">{i18n.t('buttons.see.portfolio')}</ReadMore>
			</Section>
		</Wrapper>
	)
}

export default Preview
