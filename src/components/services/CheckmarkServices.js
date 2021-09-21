import React from 'react';
import Section from "@/modules/shared/section/Section";
import Title from "@/utillities/titles/Title";
import CardFadeAnimation from '@/animation/CardFadeAnimation'
import ServiceCards from '@/utillities/cards/ServiceCards'

function CheckmarkServices({data}) {
    const {page_title} = data;
    const basePath = `content/service_page/nl`;

    return (
        <Section style={{paddingBottom: 0}} className="no-landing">

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

