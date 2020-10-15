import React, {useEffect, useState} from 'react'
import Section from '../layout/Section'
import Card from './Card'
import Title from '../text/Title'
import {portfolio} from '../../data/portfolio'
import Animation from '@/animation/Animation'
import {FadeUp} from '@/animation/FadeUp'
import {IntersectionObserver} from '@/animation/IntersectionObserver'
import Contact from '../../components/contact/Preview'
import ReadMore from "@/text/ReadMore";

function Portfolio({preview}) {

    const [portfolioPreview, setPortfolioPreview] = useState([]);

    useEffect(() => {
        if (preview) setPortfolioPreview(portfolio.slice(0, 3));
        else setPortfolioPreview(portfolio);
    }, [preview]);

    return (
        <Section id="portfolio-page">
            <Title title={'portfolio.title.header'} text={'portfolio.preview.title.text'}/>
            <div className={`portfolio ${preview ? "margin-bottom" : ""}`}>
                {portfolioPreview.map(({image, id, type, href}, i) => {
                    return (
                        <Card redirect={href} route={id} client={`cases.${id}.client`} img={image}
                              discipline={`cases.${id}.discipline`} title={`cases.${id}.title`}/>
                    )
                })}
            </div>

            {preview && <ReadMore className="read-more-big" to="/portfolio" text="buttons.portfolio"/>}
            {preview ? null : <Contact className="last-section-padding"/>}

        </Section>

    )
}

export default Portfolio
