import React from 'react';
import Section from "@/layout/Section";
import automation from '#/services/automation/automation-square.webp'
import analytics from '#/services/data-analytics/data-analytics-square.webp'
import scale from '#/services/scaleable-software/scaleable-software-sqaure.webp'
import Title from "@/utillities/titles/Title";
import Fade from 'react-reveal/Fade';
import t from "../../hooks/translator";
import CardFadeAnimation from '@/animation/CardFadeAnimation'
import ServiceCards from '@/utillities/cards/ServiceCards'

const services = [
    {
        image: scale,
        id: 'itaas',
        alt: 'scaleable software',
        bullets: 3
    },
    {
        image: automation,
        id: "hardware",
        alt: 'automation',
        bullets: 3
    },
    {
        image: analytics,
        id: "bi",
        alt: 'analytics',
        bullets: 3
    },

];

function CheckmarkServices({data}) {
    const {page_title} = data;
    const basePath = `content/service_page/nl`

    return (
        <Section style={{paddingBottom:0}} className="no-landing">

            <Title title={page_title.title} header={page_title.header} subHeader={page_title.subheader}/>

            <div className="cards-container">
                <CardFadeAnimation>
                    {data.card.map((service) => {
                        return (
                            <ServiceCards data={service} basePath={basePath} bullets={true}/>
                        )
                    })}
                </CardFadeAnimation>
            </div>

        </Section>
    );
}

export default CheckmarkServices;

