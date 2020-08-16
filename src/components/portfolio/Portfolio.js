import React from 'react'
import Section from '../layout/Section'
import Card from './Card'
import Title from '../text/Title'
import {portfolio} from '../../data/portfolio'
import Animation from "@/animation/Animation";
import ContactPreview from "@/contact/Preview";

function Portfolio() {
    return (
        <Animation animation="fade-up" delay="200">
            <Section>
                <Title title={'portfolio.preview.title.header'} text={'portfolio.preview.title.text'}/>
                <div className="portfolio portfolio-preview">
                    {portfolio.map(({image, discipline, title, client, id}, i) => {
                        return (
                            <Animation className="card-animatable" delay={150} animation="fade-up">
                                <Card route={id} client={client}
                                      img={image}
                                      discipline={discipline}
                                      title={title}/>
                            </Animation>
                        )
                    })}
                </div>
                <ContactPreview className="section-contact-preview"/>
            </Section>
        </Animation>
    )
}

export default Portfolio
