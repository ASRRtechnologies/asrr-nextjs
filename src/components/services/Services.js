import React from 'react'
import Section from '../layout/Section'
import Title from '../titles/Title'
import automation from '#/services/automation/automation-square.jpg'
import analytics from '#/services/data-analytics/data-analytics-square.jpg'
import scale from '#/services/scaleable-software/scaleable-software-sqaure.jpg'
import itaas from '#/services/itaas/itaas.jpg'
import Fade from 'react-reveal/Fade';
import styled from "@emotion/styled";
import Card from "@/services/Card";

const Wrapper = styled(Section)`
        background: ${props => props.theme.layout};
`;

function Services() {
    return (
        <Wrapper className="no-landing">
            <Title basePath={'services.preview.header'}/>
            <div className="services">

                <Fade delay={0} bottom>
                    <div className="service-card-wrapper card-margin-bottom">
                        <Card basePath={`services.cards.bridge`} paragraphs={2} image={automation}/>
                    </div>
                </Fade>

                <Fade delay={200} bottom>
                    <div className="service-card-wrapper card-margin-bottom">
                        <Card basePath={`services.cards.itaas`} paragraphs={3} image={itaas}/>
                    </div>
                </Fade>

                <Fade delay={300} bottom>
                    <div className="service-card-wrapper card-margin-bottom">
                        <Card basePath={`services.cards.microservices`} paragraphs={3} image={scale}/>
                    </div>
                </Fade>

                <Fade delay={400} bottom>
                    <div className="service-card-wrapper card-margin-bottom">
                        <Card basePath={`services.cards.insights`} paragraphs={3} image={analytics}/>
                    </div>
                </Fade>

            </div>
        </Wrapper>
    )
}

export default Services
