import React from 'react'
import Section from '../layout/Section'
import Card from './Card'
import Title from '../text/Title'
import {portfolio} from '../../data/portfolio'
import Animation from "@/animation/Animation";
import ContactPreview from "@/contact/Preview";
import {FadeUp} from "@/animation/FadeUp";
import {IntersectionObserver} from "@/animation/IntersectionObserver";
import StaggerContainer from "@/animation/StaggerContainer";

function Portfolio() {
    return (
        <Animation animation="fade-up" delay="200">
            <Section>
                <Title title={'portfolio.preview.title.header'} text={'portfolio.preview.title.text'}/>
                {/*<div className="portfolio portfolio-preview">*/}
                <IntersectionObserver className="portfolio portfolio-center" key={"port"}>
                        {portfolio.map(({image, discipline, title, client, id}, i) => {
                            return (
                                <FadeUp className="card-animatable" delay={i * 0.2}>
                                    <Card route={id} client={client}
                                          img={image}
                                          discipline={discipline}
                                          title={title}/>
                                </FadeUp>
                            )
                        })}
                </IntersectionObserver>
                {/*</div>*/}
                <ContactPreview className="section-contact-preview"/>
            </Section>
        </Animation>
    )
}

export default Portfolio
