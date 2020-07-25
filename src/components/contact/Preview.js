import React from 'react'
import useI18n from '../../hooks/use-i18n'
import Link from 'next/link'
import Section from "@/layout/Section";
import styled from "@emotion/styled";
import {useTheme} from "../../context/theme/ThemeContext";
import ReadMore from "@/text/ReadMore";
import Title from "@/text/Title";
import {previewCases} from "../../data/portfolio";
import Card from "@/portfolio/Card";

const Wrapper = styled('div')`
      background-color: ${props => props.theme.section.contactPreview};
`;

function Contact({className}) {

    const darkmode = useTheme().dark;

    const i18n = useI18n();
    return (
        <Wrapper className={`section-wrapper ${className}`}>
            <Section>
                <div className="contact preview">
                    <h2>Contact</h2>
                    <p>Wilt u weten wat wij voor u kunnen betekenen? <br/> Neem vrijblijvend contact met ons op <br/> Ons team staat u graag te woord!</p>
                    <ReadMore className="read-more" to="/contact">Lets get in touch</ReadMore>
                </div>
            </Section>
        </Wrapper>
    )
}

export default Contact


