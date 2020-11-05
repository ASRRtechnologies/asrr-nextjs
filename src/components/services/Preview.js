import React from 'react';
import Section from "@/layout/Section";
import automation from '#/services/automation/automation-square.jpg'
import analytics from '#/services/data-analytics/data-analytics-square.jpg'
import scale from '#/services/scaleable-software/scaleable-software-sqaure.jpg'
import Title from "@/titles/Title";
import Fade from 'react-reveal/Fade';
import useI18n from "../../hooks/use-i18n";
import ReadMore from "@/text/ReadMore";
import styled from "@emotion/styled";

const Wrapper = styled(Section)`
        background: ${props => props.theme.home.services};
 }`;

const services = [
    {
        image: scale,
        id: 'itaas',
        alt: 'scaleable software',
    },
    {
        image: automation,
        id: "hardware",
        alt: 'automation',
    },
    {
        image: analytics,
        id: "bi",
        alt: 'analytics',
    },

];

function Preview(props) {
    const basePath = "services.preview";
    let i18n = useI18n();
    return (
        <Wrapper>
            <Title basePath={basePath + ".header"}/>
            <div className="services-preview">
                {services.map((service, i) => {
                    let {id} = service;
                    return (
                        <Fade delay={i * 300} bottom>
                            <div className="service-preview-card card-margin-bottom">
							<span className="service-preview-card-image">
								<img src={service.image} alt={service.alt}/>
							</span>
                                <h1 className="theme-font subheader">{i18n.t(`${basePath}.services.${id}.title`)}</h1>
                                <p className="text">{i18n.t(`${basePath}.services.${id}.text`)}</p>
                            </div>
                        </Fade>
                    )
                })}
            </div>

            <div className="read-more-wrapper">
                <ReadMore className="subheader" to="/services" text="buttons.services"/>
            </div>

        </Wrapper>
    );
}

export default Preview;
