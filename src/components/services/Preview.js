import React from 'react'
import Section from '../layout/Section'
import Card from './Card'
import useI18n from '../../hooks/use-i18n'
import styled from '@emotion/styled'
import {previewServices} from '../../data/services'
import Title from '../text/Title'
import ReadMore from "@/text/ReadMore";
import Animation from "@/animation/Animation";

function Services() {
    const i18n = useI18n();
    return (
        <section className="section-wrapper">
            <Section>
                <Title title={'services.preview.title.header'} text={'services.preview.title.text'}/>
                <div className="services services-center">
                    {previewServices.map((d, i) => {
                        return (
                            <Animation className="card-animatable" animation="fade-up" delay={i * 50}>
                                <Card title={d.title} text={d.text} icon={d.icon} to={`services/${d.title}`}/>
                            </Animation>
                        )
                    })}
                </div>
                <ReadMore className="read-more-portfolio"
                          to="/services">{i18n.t('general_words.see_services')}</ReadMore>
            </Section>
        </section>
    )
}

export default Services
