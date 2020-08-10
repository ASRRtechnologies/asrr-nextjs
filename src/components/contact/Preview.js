import React from 'react'
import useI18n from '../../hooks/use-i18n'
import Section from "@/layout/Section";
import styled from "@emotion/styled";
import {useTheme} from "../../context/theme/ThemeContext";
import ReadMore from "@/text/ReadMore";
import Title from "@/text/Title";
import Email from "@/icons/Email";
import Button from "@/Button";

const Wrapper = styled('div')`
      // background-color: ${props => props.theme.home.contact};
`;

function Contact({className, title}) {

    const darkmode = useTheme().dark;

    const i18n = useI18n();
    return (
        <Wrapper className={`section-wrapper ${className}`}>
            <Section>
                <div className={`contact preview ${title}`}>
                    <Title className={`${title} title-button`} title={'contact.preview.title.header'} text={'contact.preview.title.text'}/>
                    <Button custom to="/contact" title="Let's Get In Touch"/>
                </div>
            </Section>
        </Wrapper>
    )
}

export default Contact


