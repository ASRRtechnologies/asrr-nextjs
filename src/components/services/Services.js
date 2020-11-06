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
import PreviewServices from "@/services/Preview";
import Application from "@/layout/Application";

const Wrapper = styled(Section)`
        background: ${props => props.theme.layout};
`;

function Services() {
    return (
        <Wrapper className="no-landing">
            <PreviewServices compact/>

            {/*<Title basePath={'services.preview.header'}/>*/}
            <div className="services">

                <Fade delay={0} bottom>
                    <div className="service-card-wrapper card-margin-bottom">
                        <Card route="/itaas" basePath={`services.cards.itaas`} paragraphs={1} image={scale}/>
                    </div>
                </Fade>

                <Fade delay={200} bottom>
                    <div className="service-card-wrapper card-margin-bottom">
                        <Card route="/" basePath={`services.cards.hardware`} paragraphs={2} image={automation}/>
                    </div>
                </Fade>

                <Fade delay={300} bottom>
                    <div className="service-card-wrapper card-margin-bottom">
                        <Card route="/" basePath={`services.cards.bi`} paragraphs={1} image={analytics}/>
                    </div>
                </Fade>


            </div>
        </Wrapper>
    )
}

export default Services
