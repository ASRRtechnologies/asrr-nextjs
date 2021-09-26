import React from 'react'
import Section from '@/modules/shared/section/Section'
import Title from '@/utillities/titles/Title'
import styled from '@emotion/styled'
import Grid from "@/modules/shared/grid/Grid";
import ServiceCards from "./ServiceCards";

const Wrapper = styled(Section)`

`;

function ServicePreview({content, allServices}) {
    const basePath = `content/service_page/nl`;
    const filteredServices = allServices.filter((service) => service.info.preview);

    const breakPoints = {
        1200: 3,
        600: 2,
        400: 1,
        0: 1,
    }

    return (
        <Wrapper>
            <Title title={content.title} text={content.text}/>
            <Grid breakpoints={breakPoints} fade={true} maxWidth="1400px">
                {filteredServices.map((service) => {
                    return (
                        <ServiceCards content={service} basePath={basePath}/>
                    )
                })}
            </Grid>
        </Wrapper>
    )
}

export default ServicePreview
