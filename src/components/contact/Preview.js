import React from 'react'
import Section from '@/layout/Section'
import Title from '@/utillities/titles/Title'
import { Fade } from 'react-awesome-reveal'
import styled from '@emotion/styled'
import Link from 'next/link'
import useI18n from '../../hooks/use-i18n'
import NavigationButtonWhite from "@/buttons/NavigationButtonWhite";

const Wrapper = styled(Section)`
        background: ${props => props.theme.home.contact};
        h1, h2, h3, p {
          color:white !important;
        }
 }`;

const DarkButton = styled('div')`
        background-color: ${props => props.theme.button.dark.background};
        box-shadow: ${props => props.theme.button.dark.shadow};
        p, a{color: ${props => props.theme.button.dark.font}} !important;
        // &:hover{background-color: ${props => props.theme.button.dark.hover};}
        `;

function Contact ({ title, className }) {
	const i18n = useI18n();

	const titleObject = {
		title: 'Neem contact met ons op',
		header: 'Meer weten over wat ASRR voor u kan betekenen? Een van onze experts staat u graag te woord.',
		subheader: 'Contact',
	};


	return (
		<Wrapper className={`contact-invitation-section ${className ? className : ''}`}>
			<div className={`contact-preview ${title}`}>
				<Title className={`${title} title-button`} header={titleObject.header} subHeader={titleObject.subheader}
					   title={titleObject.title}/>
				<Fade triggerOnce delay={300} direction="up">
					<NavigationButtonWhite title="Kom in contact" to="contact"/>
				</Fade>
			</div>
		</Wrapper>
	)
}

export default Contact


