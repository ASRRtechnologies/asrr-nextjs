import React from 'react'
import Section from '@/layout/Section'
import Title from '@/utillities/titles/Title'
import { Fade } from 'react-awesome-reveal'
import styled from '@emotion/styled'
import Link from 'next/link'
import useI18n from '../../hooks/use-i18n'
import matter from 'gray-matter'

const Wrapper = styled(Section)`
        background: ${props => props.theme.home.contact};
        h1, h2, h3, p {
          color:white !important;
        }
 }`

const DarkButton = styled('div')`
        background-color: ${props => props.theme.button.dark.background};
        box-shadow: ${props => props.theme.button.dark.shadow};
        p, a{color: ${props => props.theme.button.dark.font}} !important;
        // &:hover{background-color: ${props => props.theme.button.dark.hover};}
        `

function Contact ({ title, className }) {
	const i18n = useI18n()
	let parsedContent = matter(contactFile.default)
	let data = parsedContent.data

	const titleObject = {
		title: 'Neem contact met ons op',
		header: 'Meer weten over wat ASRR voor u kan betekenen? Een van onze experts staat u graag te woord.',
		subheader: 'Contact',
	}

	return (
		<Wrapper className={`contact-invitation-section ${className ? className : ''}`}>
			<div className={`contact-preview ${title}`}>
				<Title className={`${title} title-button`} header={titleObject.header} subHeader={titleObject.subheader}
					   title={titleObject.title}/>
				<Fade delay={100} direction="up">
					<DarkButton className={`button button-auto ${className}`}>
						<Link href="/contact"><a>{i18n.t('buttons.contact')}</a></Link>
					</DarkButton>
				</Fade>
			</div>
		</Wrapper>
	)
}

export default Contact


