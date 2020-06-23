import React from 'react'
import ReadMore from '@/text/ReadMore'
import Input from '@/text/Input'
import useI18n from '../../hooks/use-i18n'
import styled from '@emotion/styled'

const Wrapper = styled('div')`
      background-color: ${props => props.theme.section.contactPreview};
`

function Contact (props) {
	const i18n = useI18n()
	return (
		<Wrapper className="section-wrapper">
			<div className="contact preview section">
				<h3>{i18n.t('contact.cta.curious')}<br/>{i18n.t('contact.cta.touch')}</h3>
				<form className="form">
					<Input className="no-margin" name="name" type="text"
						   required={true} placeholder={i18n.t('contact.form.name.label')}/>
					<Input name="organization" type="text"
						   required={true}
						   placeholder={i18n.t('contact.form.organization.placeholder')}/>
					<Input name="email" type="email"
						   placeholder={i18n.t('contact.form.email.placeholder')}/>
					<Input name="message" textArea={true} last type="text"
						   required={true} placeholder={i18n.t('contact.form.message.placeholder')}/>
					<ReadMore margin action>{i18n.t('buttons.submit')}</ReadMore>
				</form>
			</div>
		</Wrapper>
	)
}

export default Contact
