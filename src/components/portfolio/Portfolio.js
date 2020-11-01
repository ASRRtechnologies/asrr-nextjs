import React, {useEffect, useState} from 'react'
import Section from '../layout/Section'
import Card from './Card'
import Title from '../titles/Title'
import {portfolio} from '../../data/portfolio'
import Contact from '../../components/contact/Preview'
import ReadMore from "@/text/ReadMore";

function Portfolio({preview}) {

    const [cases, setCases] = useState([]);

    useEffect(() => {

    }, []);

    return (
        <Section id="portfolio-page">
            <Title basePath={'portfolio.preview.header'}/>
            <div className={`portfolio`}>
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
