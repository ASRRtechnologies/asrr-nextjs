import React, {useState} from 'react'
import Section from '../layout/Section'
import Title from '../text/Title'
import useI18n from '../../hooks/use-i18n'
import styled from '@emotion/styled'
import Card from "@/stories/Card";
import {previewCases} from "../../data/portfolio";

const Wrapper = styled('div')`
      background-color: ${props => props.theme.section.portfolio};
`

function Stories (props) {
    const i18n = useI18n();
    const [active, setActive] = useState(0);
    return (
        <Wrapper className="section-wrapper">
            <Section>
                <Title title={'stories.title.header'} text={'stories.title.text'}/>
                <div className="stories">
                    <Card/>
                    <Card/>
                    <Card/>

                </div>
            </Section>
        </Wrapper>
    )
}

export default Stories
