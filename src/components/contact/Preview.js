import React from 'react'
import Section from '@/layout/Section'
import Title from '@/titles/Title'
import Fade from "react-reveal/Fade";
import styled from "@emotion/styled";
import Link from "next/link";
import useI18n from "../../hooks/use-i18n";

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

function Contact({title, className}) {
    const i18n = useI18n();

    return (
        <Wrapper className={`contact-invitation-section ${className ? className : ""}`}>
            <div className={`contact-preview ${title}`}>
                <Title className={`${title} title-button`} basePath={'contact.preview.header'}/>

                <Fade delay={100} bottom>
                    <DarkButton className={`button button-auto ${className}`}>
                        <Link href="/contact"><a>{i18n.t("buttons.contact")}</a></Link>
                    </DarkButton>
                </Fade>

            </div>
        </Wrapper>
    )
}

export default Contact


