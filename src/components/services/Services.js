import React from 'react'
import Section from '../layout/Section'
import Card from './Card'
import Title from '../text/Title'
import styled from '@emotion/styled'
import {services} from '../../data/services'
import Preview from "@/contact/Preview";
import Animation from "@/animation/Animation";
import useI18n from "../../hooks/use-i18n";

const Wrapper = styled('div')`
      background-color: ${props => props.theme.layout};
`;

function Services(props) {
    const i18n = useI18n();

    return (
        <Animation animation="fade-up" delay="200">
            <Section>
                <Title title={'services.header.title'}/>
                <div className="services">
                    {
                        services.map((d) => {
                                return (
                                    <Animation className="card-animatable" animation="fade-up" delay="150">
                                        <Card title={d.preview_title} text={d.preview_text} icon={d.icon}
                                              to={`services/${i18n.t(d.title)}`}/>
                                    </Animation>
                                )
                            }
                        )}
                </div>
                <Preview/>
            </Section>
        </Animation>
    )
}

export default Services
