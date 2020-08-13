import React, {useState} from 'react'
import Section from '../layout/Section'
import Card from './Card'
import ReadMore from '../text/ReadMore'
import Title from '../text/Title'
import {previewCases} from '../../data/portfolio'
import useI18n from '../../hooks/use-i18n'
import styled from '@emotion/styled'
import Animation from "@/animation/Animation";

const Wrapper = styled('div')`
      // background-color: ${props => props.theme.home.portfolio};
`

function Preview(props) {
    const i18n = useI18n()
    const [active, setActive] = useState(0)
    return (
        <Wrapper className="section-wrapper">
            <Section>
                <Title title={'portfolio.preview.title.header'} text={'portfolio.preview.title.text'}/>
                <div className="portfolio portfolio-center portfolio-preview">
                    {previewCases.map(({image, discipline, title, client, id}) =>
                        <Animation className="card-animatable" animation="fade-up">
                            <Card route={id} client={client} img={image} discipline={discipline} title={title}/>
                        </Animation>
                    )}
                </div>
                <ReadMore className="read-more-portfolio"
                          to="/portfolio">{i18n.t('general_words.see_portfolio')}</ReadMore>
            </Section>
        </Wrapper>
    )
}

export default Preview
