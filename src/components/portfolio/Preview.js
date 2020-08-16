import React, {useState} from 'react'
import Section from '../layout/Section'
import Card from './Card'
import ReadMore from '../text/ReadMore'
import Title from '../text/Title'
import {previewCases} from '../../data/portfolio'
import useI18n from '../../hooks/use-i18n'
import styled from '@emotion/styled'
import Animation from "@/animation/Animation";

function Preview(props) {
    const i18n = useI18n()
    const [active, setActive] = useState(0)
    return (
        <Animation animation="fade-up" delay="200">
            <Section>
                <Title title={'portfolio.preview.title.header'} text={'portfolio.preview.title.text'}/>
                <div className="portfolio portfolio-center portfolio-preview">
                    {previewCases.map(({image, discipline, title, client, id}, i) =>
                        <Animation animation="fade-up" className="card-animatable" delay={i * 200}>
                            <Card route={id} client={client} img={image} discipline={discipline} title={title}/>
                        </Animation>
                    )}
                </div>
                <Animation animation="fade-up" delay="200">
                    <ReadMore className="read-more-portfolio" to="/portfolio">{i18n.t('buttons.portfolio')}</ReadMore>
                </Animation>
            </Section>
        </Animation>
    )
}

export default Preview
