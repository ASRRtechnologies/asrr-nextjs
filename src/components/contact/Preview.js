import React from 'react'
import useI18n from '../../hooks/use-i18n'
import Section from "@/layout/Section";
import styled from "@emotion/styled";
import {useTheme} from "../../context/theme/ThemeContext";
import ReadMore from "@/text/ReadMore";
import Title from "@/text/Title";
import Email from "@/icons/Email";

const Wrapper = styled('div')`
      background-color: ${props => props.theme.home.contact};
`;

function Contact({className}) {

    const darkmode = useTheme().dark;

    const i18n = useI18n();
    return (
        <Wrapper className={`section-wrapper ${className}`}>
            <Section>
                <div className="contact preview">
                    <Title title={'services.preview.title.header'} text={'services.preview.title.text'}/>
                    {/*<h2>Contact</h2>*/}
                    {/*<p>Wilt u weten wat wij voor u kunnen betekenen? <br/> Neem vrijblijvend contact met ons op.</p>*/}
                    <ReadMore className="read-more" to="/contact">Lets get in touch</ReadMore>
                </div>
            </Section>
        </Wrapper>
    )
}

export default Contact


