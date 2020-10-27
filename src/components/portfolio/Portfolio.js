import React, {useEffect, useState} from 'react'
import Section from '../layout/Section'
import Card from './Card'
import Title from '../text/Title'
import {portfolio} from '../../data/portfolio'
import Contact from '../../components/contact/Preview'
import ReadMore from "@/text/ReadMore";

function Portfolio({preview}) {

    const [cases, setCases] = useState([]);

    useEffect(() => {
        if (preview) setCases(portfolio.slice(0, 3));
        else setCases(portfolio);
    }, [preview]);

    return (
        <Section className={`${preview ? "" : "section-page-contact-form"}`} id="portfolio-page">
            <Title title={'portfolio.title.header'} text={'portfolio.preview.title.text'}/>
            <div className={`portfolio ${preview ? "margin-bottom" : ""}`}>
                {cases.map(({image, id, type, href}, i) => {
                    return (
                        <Card redirect={href} route={`/portfolio/case/${id}`} client={`cases.${id}.client`} img={image}
                              discipline={`cases.${id}.discipline`} title={`cases.${id}.title`}/>
                    )
                })}
            </div>

            {preview && <ReadMore className="read-more-big" to="/portfolio" text="buttons.portfolio"/>}
            {preview ? null : <Contact className="section-contact-form"/>}
        </Section>
    )
}

export default Portfolio
