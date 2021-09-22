import React from 'react'
import Section from '@/modules/shared/section/Section'
import {Fade} from 'react-awesome-reveal'
import styled from '@emotion/styled'
import useI18n from '../../hooks/use-i18n'
import NavigationButtonWhite from "@/buttons/NavigationButtonWhite";
import contactStyles from "./contact.module.scss";

// @ts-ignore
const DarkButton = styled('div')`
  background-color: ${props => props.theme.button.dark.background};
  box-shadow: ${props => props.theme.button.dark.shadow};

  p, a {
    color: ${props => props.theme.button.dark.font}
  }

!important;
    // &:hover{background-color: ${props => props.theme.button.dark.hover};}
`;


function Preview({title, className}) {
    const i18n = useI18n();

    const titleObject = {
        title: 'Neem contact met ons op',
        header: 'Meer weten over wat ASRR voor u kan betekenen? Een van onze experts staat u graag te woord.',
        subheader: 'Contact',
    };

    return (
        <Section className={contactStyles.contactPreview}>
            <div className={contactStyles.contactInner}>
                <h1 className="h2">{titleObject.title}</h1>
                <h2 className="h3 not-bold">{titleObject.header}</h2>
                {/*<Fade triggerOnce delay={300} direction="up">*/}
                {/*    <NavigationButtonWhite title="Kom in contact" to="contact" className={undefined}*/}
                {/*                           custom={undefined}/>*/}
                {/*</Fade>*/}
            </div>
        </Section>
    )
}

export default Preview


