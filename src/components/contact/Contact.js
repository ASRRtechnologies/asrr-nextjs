import React from 'react'
import Section from '../layout/Section'
import Title from '../text/Title'
import ReadMore from '@/text/ReadMore'
import Input from '@/text/Input'
import Map from '@/contact/Map'
import useI18n from '../../hooks/use-i18n'
import styled from '@emotion/styled'

const Wrapper = styled('div')`
      background-color: ${props => props.theme.section.contact};
      
      a{
      	color: ${props => props.theme.fonts.text}
      }
`

function Contact ({ big }) {
	const i18n = useI18n()
	return (
		<Wrapper className="section-wrapper">
			<Section>
				<Title big={big} title={'contact.title.header'} text={'contact.title.text'}/>
				<div className="contact">
					<form className="form">
						<Input className="no-margin" name="name" type="text"
							   required={true} placeholder={i18n.t('contact.form.name.placeholder')}/>
						<Input name="organization" type="text" required={true}
							   placeholder={i18n.t('contact.form.organization.placeholder')}/>
						<Input name="email" type="email"
							   placeholder={i18n.t('contact.form.email.placeholder')}/>
						<Input name="message" last textArea={true} type="text"
							   required={true} placeholder={i18n.t('contact.form.message.placeholder')}/>
						<ReadMore margin action>{i18n.t('buttons.submit')}</ReadMore>

						<div className="contact-adress">
							<p>Adress: Veraartlaan 12</p>
							<p>2288 GM Rijswijk, The Netherlands</p>
							<a target="_blank" rel="noopener noreferrer" href="https://goo.gl/maps/fZqhC9FUVTpiEiCb7" className="link">Get Directions</a>
							<a href="mailto:asrr@contact.nl" target="_blank" rel="noopener noreferrer" className="link">Email: contact@asrr.nl</a>
						</div>

						<div className="map-container">
							<Map/>
						</div>

					</form>


				</div>
			</Section>
		</Wrapper>
	)
}

export default Contact
