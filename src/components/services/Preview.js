import React from 'react'
import Section from '../layout/Section'
import Card from './Card'
import useI18n from '../../hooks/use-i18n'
import styled from '@emotion/styled'
import {previewServices} from '../../data/services'

const Wrapper = styled('div')`
      background-color: ${props => props.theme.home.services}; 
`;

function Services() {
    const i18n = useI18n();
    return (
        <Wrapper className="section-wrapper">
            <Section>
                <div className="services services-preview ">
                    {previewServices.map((d) => {
                        return (
                            <Card className="card-preview" title={d.title} text={d.text} icon={d.icon}/>
                        )
                    })}
                </div>
            </Section>
        </Wrapper>
    )
}

export default Services
