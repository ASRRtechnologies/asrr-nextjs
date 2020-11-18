import React from 'react';
import Section from "@/layout/Section";
import automation from '#/services/automation/automation-square.webp'
import analytics from '#/services/data-analytics/data-analytics-square.webp'
import scale from '#/services/scaleable-software/scaleable-software-sqaure.webp'
import Title from "@/titles/Title";
import Fade from 'react-reveal/Fade';
import ReadMore from "@/text/ReadMore";
import styled from "@emotion/styled";
import t from "../../hooks/translator";

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

function CheckmarkServices(props) {
    const basePath = "services.preview";
    return (
        <Section className="no-landing">
            <Title basePath={basePath + ".header"}/>
            <div className="services-preview">
                {services.map((service, i) => {
                    let {id} = service;
                    return (
                        <Fade delay={200} bottom>
                            <div className="service-preview-card card-margin-bottom">
							<span className="service-preview-card-image">
								<img src={service.image} alt={service.alt}/>
							</span>
                                <h1 className="theme-font subheader">{t(`${basePath}.services.${id}.title`)}</h1>

                                {/*{!props.compact && <>  <p className="text">{t(`${basePath}.services.${id}.text`)}</p></>}*/}

                                {service.bullets && <ul className="service-list">
                                    {[...Array(service.bullets)].map((x, i) => {
                                        return <li>✔ {t(`${basePath}.services.${id}.bullets.${i}`)}</li>
                                    })}
                                </ul>}
                            </div>
                        </Fade>
                    )
                })}
            </div>

        </Section>
    );
}

export default CheckmarkServices;
