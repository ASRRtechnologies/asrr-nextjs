import React from 'react';
import Section from "@/layout/Section";
import automation from '#/services/automation/automation-square.jpg'
import analytics from '#/services/data-analytics/data-analytics-square.jpg'
import scale from '#/services/scaleable-software/scaleable-software-sqaure.jpg'
import Title from "@/titles/Title";
import Fade from 'react-reveal/Fade';
import useI18n from "../../hooks/use-i18n";

const services = [
    {
        image: analytics,
        id: "bridge",
        title: 'Big Data/BI/Analytics',
        text: 'orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been\n' +
            '\t\t\t\t\t\tthe industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley\n' +
            '\t\t\t\t\t\tof type',
        alt: 'analytics',
    },
    {
        image: automation,
        id: "microservices",
        title: 'High-end, Scaleable Software ',
        text: 'orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been\n' +
            '\t\t\t\t\t\tthe industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley\n' +
            '\t\t\t\t\t\tof type',
        alt: 'automation',
    },
    {
        image: scale,
        id: 'itaas',
        text: 'orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been\n' +
            '\t\t\t\t\t\tthe industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley\n' +
            '\t\t\t\t\t\tof type',
        alt: 'scaleable software',
    },

]

function Preview(props) {
    const basePath = "services.preview";
    let i18n = useI18n();
    return (
        <Section>
            <Title basePath={basePath + ".headline"}/>
            <div className="services-preview">
                {services.map((service, i) => {
                    let {id} = service;
                    return (
                        <Fade delay={i * 300} bottom>
                            <div className="service-preview-card">
							<span className="service-preview-card-image">
								<img src={service.image} alt={service.alt}/>
							</span>
                                <h3 className="theme-font">{i18n.t(`${basePath}.services.${id}.title`)}</h3>
                                <p>{i18n.t(`${basePath}.services.${id}.text`)}</p>
                            </div>
                        </Fade>
                    )
                })}
            </div>

        </Section>
    );
}

export default Preview;