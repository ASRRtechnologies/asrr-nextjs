import React from 'react'
import Section from '../layout/Section'
import Card from './Card'
import ReadMore from '../text/ReadMore'
import Title from '../text/Title'
import useI18n from '../../hooks/use-i18n'
import styled from '@emotion/styled'
import {previewServices} from '../../data/services'
import Chevron from "@/icons/Chevron";
import Layout from "@/layout/Layout";

const Wrapper = styled('div')`
      background-color: #eeeeee;
      // background-color: ${props => props.theme.section.services}; 
`;

function Services() {
    const i18n = useI18n();
    return (
        <Wrapper className="section-wrapper">
            <Section>
                <div className="services services-preview ">
                    {previewServices.map((d) => {
                        return (
                            <Card title={d.title} text={d.text} icon={d.icon}/>
                        )
                    })}
                </div>
            </Section>
        </Wrapper>
    )
}

export default Services
