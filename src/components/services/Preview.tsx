import React from 'react'
import Section from '@/modules/shared/section/Section'
import Title from '@/utillities/titles/Title'
import styled from '@emotion/styled'
import CardFadeAnimation from '@/animation/CardFadeAnimation'
import Grid from "@/modules/shared/grid/Grid";
import ServiceCards from "./ServiceCards";

const Wrapper = styled(Section)`
  background: ${props => props.theme.home.services};
}`;

function Preview({data, services}) {
    const basePath = `content/service_page/nl`;

    const breakPoints = {
        1200: 3,
        600: 2,
        400: 1,
        0: 1,
    }

    return (
        <Wrapper>
            <Title title={data.title} text={data.text}/>
            <Grid breakpoints={breakPoints} fade={true} maxWidth="1400px">
                {services.card.map((service) => {
                    return (
                        <ServiceCards content={service} basePath={basePath}/>
                    )
                })}
            </Grid>
        </Wrapper>
    )
}

export default Preview
