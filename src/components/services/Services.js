import React from 'react'
import Section from '../layout/Section'
import Title from '../titles/Title'
import automation from '#/services/automation/automation-square.jpg'
import analytics from '#/services/data-analytics/data-analytics-square.jpg'
import scale from '#/services/scaleable-software/scaleable-software-sqaure.jpg'
import itaas from '#/services/itaas/itaas.jpg'
import Fade from 'react-reveal/Fade';
import useI18n from "../../hooks/use-i18n";

const Card = ({image, basePath, paragraphs}) => {
    let title = `${basePath}.title`

    const i18n = useI18n();
    return (
        <Fade bottom>
            <div className="service-card">
                <div className="service-card-text">
                    <div className="service-card-text-wrapper">
					<span>
						{title && <h2>{i18n.t(title) !== undefined ? i18n.t(title) : title}</h2>}


                        {[...Array(paragraphs)].map((x, i) => {

                                let text = `${basePath}.paragraphs.${i}`;

                                return <p>{i18n.t(text) !== undefined ? i18n.t(text) : text}</p>
                            }
                        )}

					</span>
                    </div>
                </div>

                <div className="service-card-image">
                    <div className="service-card-image-wrapper">
                        <img src={image} alt="services-alt"/>
                    </div>
                </div>
            </div>
        </Fade>
    )


};

function Services() {


    return (
        <Section id="services">
            <Title basePath={'services.preview.header'}/>
            <div className="services">
                <Card basePath={`services.cards.bridge`} paragraphs={2} image={automation}/>
                <Card basePath={`services.cards.itaas`} image={itaas}/>
                <Card basePath={`services.cards.microservice`} image={scale}/>
                <Card basePath={`services.cards.insights`} image={analytics}/>
            </div>

        </Section>
    )
}

export default Services
