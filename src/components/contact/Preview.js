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

function Contact(props) {

    const darkmode = useTheme().dark;

    const i18n = useI18n();
    return (
        <Wrapper className="section-wrapper">
            <Section>
                <Title title={'contact.preview.title.header'} text={'contact.preview.title.text'}/>
                <ReadMore className="read-more-portfolio" to="/portfolio"></ReadMore>
            </Section>
        </Wrapper>
    )
}

export default Contact


