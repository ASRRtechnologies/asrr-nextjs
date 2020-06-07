import React from 'react'
import Section from '../layout/Section'
import Title from '../text/Title'
import ReadMore from '@/text/ReadMore'
import Input from '@/text/Input'
import Map from '@/contact/Map'
import useI18n from '../../hooks/use-i18n'

function Contact ({ big }) {
	const i18n = useI18n()
	return (
			<Section>
				<Title big={big} title={i18n.t('contact.title.header')} text={i18n.t('contact.title.text')}/>
				<div className="contact">
					<form className="form">
						<Input className="no-margin" name="name" label={i18n.t('contact.form.name.label')} type="text"
							   required={true} placeholder={i18n.t('contact.form.email.placeholder')}/>
						<Input name="organization" label={i18n.t('contact.form.organization.label')} type="text"
							   required={true}
							   placeholder={i18n.t('contact.form.organization.placeholder')}/>
						<Input name="email" label={i18n.t('contact.form.email.label')} type="email"
							   placeholder={i18n.t('contact.form.email.placeholder')}/>
						<Input name="message" textArea={true} label={i18n.t('contact.form.message.label')} type="text"
							   required={true} placeholder={i18n.t('contact.form.message.placeholder')}/>
						<ReadMore margin action>{i18n.t('buttons.submit')}</ReadMore>
					</form>
					<div className="map-container">
						<Map/>
					</div>
				</div>
			</Section>
	)
}

export default Contact
